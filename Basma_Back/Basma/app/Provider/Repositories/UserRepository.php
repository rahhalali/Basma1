<?php

namespace App\Provider\Repositories;

use App\Models\User;
use Carbon\Carbon;

class UserRepository
{
    public function Average($description){
        $Count=User::all()->count();
        if($description !== "day") {
            if($description !== "week"){
                if($description !== "month"){
                    if($description !=="months"){
                        if($description !== "year"){
                            return "Sorry Something went Wrong";
                        }
                        $date=Carbon::now()->subYear(1)->toDateTimeString();
                        $time = $this->Year($date, $Count);
                        return response()->json([
                            "time"=>$time,
                             "day"=>$description
                        ]);
                    }
                    $date=Carbon::now()->subMonth(1)->toDateTimeString();

                    $time = $this->Months($date, $Count);
                    return response()->json([
                        "time"=>$time,
                         "day"=>$description
                    ]);
                }
                $date=Carbon::now()->subMonth(3)->toDateTimeString();

                $time = $this->Month($date, $Count);
                return response()->json([
                    "time"=>$time,
                     "day"=>$description
                ]);
            }
            $date=Carbon::now()->subWeek(1)->toDateTimeString();
            $time = $this->Weeks($date, $Count);
            return response()->json([
                "time"=>$time,
                 "day"=>$description
            ]);
        }
        $date=Carbon::now()->subHours(24)->toDateTimeString();
        $time = $this->Hours($date, $Count);
        return response()->json([
            "time"=>$time,
             "day"=>$description
        ]);
    }
    public function filter($per_page,$filter){
        if(!$filter->firstname){
            if(!$filter->email){
                if(!$filter->id){
                    return $this->all();
                }
                return $this->id($filter,$per_page);
            }
            return $this->email($filter,$per_page);
        }
    return $this->name($filter,$per_page);
    }

    protected function all(){
        return User::paginate(30);
    }
    protected function id($filter,$per_page){
        return User::where('id','LIKE','%'.$filter->id.'%')->paginate($per_page);
    }
    protected function email($filter,$per_page){
        return User::where('email','LIKE','%'.$filter->email.'%')->paginate($per_page);
    }
    protected function name($filter,$per_page){
        return  User::where('name','LIKE','%'.$filter->firstname.'%')->paginate($per_page);
    }

    protected function Hours($to,$count){
        $avgHr = User::where('created_at','>',$to)->count();
        $AVG = ceil($avgHr/24);
        return $AVG ;
    }
    protected function Weeks($to,$count){
        $avgWeek = User::where('created_at','>',$to)->count();
        $AVG = ceil($avgWeek / 7);
        return $AVG;
    }
    protected function Month($to,$count){
        $avgWeek = User::where('created_at','>',$to)->count();
        $AVG = ceil($avgWeek / (7 * 4 + 2));
        return $AVG;
    }
    protected function Months($to,$count){
        $avgWeek = User::where('created_at','>',$to)->count();
        $AVG = ceil($avgWeek / ((( 7 * 4 ) + 2)*3));
        return $AVG;
    }
    protected function Year($to,$count){
        $avgWeek = User::where('created_at','>',$to)->count();
        $AVG = ceil($avgWeek / ((( 7 * 4)  + 2) * 12));
        return $AVG;
    }
}
