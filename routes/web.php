<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth
Route::get('login')->name('login')->uses('Auth\LoginController@showLoginForm')->middleware('guest');
Route::post('login')->name('login.attempt')->uses('Auth\LoginController@login')->middleware('guest');
Route::get('logout')->name('logout')->uses('Auth\LoginController@logout');

// Front
Route::get('/')->name('front')->uses('FrontController')->middleware('guest');
Route::post('/')->name('front.store')->uses('FrontController@store')->middleware('guest');

// Users
Route::get('users')->name('users')->uses('UsersController@index')->middleware('remember', 'auth');
Route::get('users/create')->name('users.create')->uses('UsersController@create')->middleware('auth');
Route::post('users')->name('users.store')->uses('UsersController@store')->middleware('auth');
Route::get('users/{user}/edit')->name('users.edit')->uses('UsersController@edit')->middleware('auth');
Route::put('users/{user}')->name('users.update')->uses('UsersController@update')->middleware('auth');
Route::delete('users/{user}')->name('users.destroy')->uses('UsersController@destroy')->middleware('auth');
Route::put('users/{user}/restore')->name('users.restore')->uses('UsersController@restore')->middleware('auth');

// Role
Route::get('roles')->name('roles')->uses('RolesController@index')->middleware('remember', 'auth');
Route::get('roles/create')->name('roles.create')->uses('RolesController@create')->middleware('auth');
Route::post('roles')->name('roles.store')->uses('RolesController@store')->middleware('auth');
Route::get('roles/{role}/edit')->name('roles.edit')->uses('RolesController@edit')->middleware('auth');
Route::put('roles/{role}')->name('roles.update')->uses('RolesController@update')->middleware('auth');
Route::delete('roles/{role}')->name('roles.destroy')->uses('RolesController@destroy')->middleware('auth');

Route::get('dashboard')->name('dashboard')->uses('DashboardController@index')->middleware('remember', 'auth');

Route::get('transactions')->name('transactions')->uses('TransactionController@index')->middleware('remember', 'auth');
Route::get('finances')->name('finances')->uses('FinanceController@index')->middleware('remember', 'auth');

Route::get('customers')->name('customers')->uses('CustomerController@index')->middleware('remember', 'auth');


// 500 error
Route::get('500', function () {
    echo $fail;
});
