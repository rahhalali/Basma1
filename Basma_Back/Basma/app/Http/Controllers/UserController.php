<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Provider\Repositories\UserRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class UserController extends Controller
{
    /**
     * @var UserRepository
     */
    private $userRepository;

    public function __construct(UserRepository $userRepository){

        $this->userRepository = $userRepository;
    }
    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email'    => $request->email,
            'password' => $request->password,
        ]);

        $token = auth('user')->login($user);

        return $this->respondWithToken($token);
    }

    public function login()
    {
        $credentials = request(['email', 'password']);

        if ( ! $token = auth('user')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->respondWithToken($token);
    }

    public function logout()
    {
        auth('user')->logout();

        return response()->json([
            'status'=>200,
            'message' => 'Successfully logged out']);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'status'=>200,
            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth('user')->factory()->getTTL() * 60
        ]);
    }
    public function index(Request $request){
        $per_page=$request->numberperpage;
        return $this->userRepository->filter($per_page,$request);
    }


    public function GetAvg(Request $request){
        $description = $request->input('day');
        return $this->userRepository->Average($description);
    }


}
