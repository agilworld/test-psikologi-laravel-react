<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use App\Models\RoleHasFunction;

use Illuminate\Database\Seeder;
use Database\Seeders\RoleFunctions;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            RoleFunctions::class,
        ]);

        $role = Role::create([
            'name' => 'Superadmin',
            'hide' => 1
        ]);

        $user = User::create([
            'role_id' => $role->id,
            'email' => "soekarno@indonesia.com",
            'password' => "12345678",
            'first_name' => 'Soekarno',
            'last_name' => 'Indonesia',
            'owner' => 1
        ]);

    }
}
