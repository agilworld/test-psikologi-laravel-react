<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('role_id')->index()->nullable();
            $table->string('first_name', 25);
            $table->string('last_name', 25)->nullable();
            $table->string('email', 50)->unique();
            $table->string('password')->nullable();
            $table->boolean('owner');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
