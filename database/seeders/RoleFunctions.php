<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\RoleFunction;
use Illuminate\Support\Str;

class RoleFunctions extends Seeder
{
    protected $menus = [
        'finance' => 'Finance',
        'customer' => 'Customer',
        'transaction' => 'Transaction'
    ];

    protected $functions = [
       'create',
       'read',
       'update',
       'delete'
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->menus as $slug => $name) {
           foreach ($this->functions as $function) {
            $account = RoleFunction::create([
                'menu' => $name,
                'slug' => $slug,
                'name' => Str::slug($slug . " " . $function ),
                "capability" => $function
            ]);
           }
        }
    }
}
