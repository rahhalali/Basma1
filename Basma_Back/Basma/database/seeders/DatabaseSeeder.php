<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//        User::factory()->count(151)->create();

        for($i=0;$i<=100;$i++){
            User::create([
                'name'=>"Ali".$i,
                'email'=>"alih.rahhal".$i."@gmail.com",
                'password'=>bcrypt('password'),
            ]);
        }
         User::create([
             'name'=>'Ali',
             'email'=>'alih.rahhal@hotmail.com',
             'password'=>bcrypt('abc@123')
         ]);
    }
}
