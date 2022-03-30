<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    public function run()
    {
        $roles = [
           [
               'id'    => 1,
               'title' => 'Admin',
           ],
           [
               'id'    => 2,
               'title' => 'HRD',
           ],
           [
               'id'    => 3,
               'title' => 'Manager',
           ],
            [
                'id'    => 4,
                'title' => 'Employee',
            ],
            [
                'id'    => 5,
                'title' => 'HR',
            ],
        ];

        Role::insert($roles);
    }
}
