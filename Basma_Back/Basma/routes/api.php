<?php

use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::post('/login', [UserController::class, 'login']);
Route::group(['middleware' => ['jwt.user']], function() {
    Route::group(['prefix' => '/average'], function () {
        Route::get('/get/hr',[UserController::class,'GetAvg']);
    });
    Route::group(['prefix'=>'/user'],function (){
        Route::post('/logout', [UserController::class, 'logout']);
        Route::get('/get/users/filter',[UserController::class,'index']);

    });
});
Route::post('/user/register', [UserController::class, 'register']);



