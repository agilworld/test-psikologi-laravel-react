<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleDeleteRequest;
use App\Http\Requests\RoleStoreRequest;
use App\Http\Requests\RoleUpdateRequest;
use App\Http\Resources\RoleCollection;
use App\Http\Resources\RoleResource;
use App\Models\Role;
use App\Models\RoleFunction;
use App\Models\RoleHasFunction;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;

class RolesController extends Controller
{
    public function index()
    {
        return Inertia::render('Roles/Index', [
            'filters' => Request::all('search'),
            'roles' => new RoleCollection(
                Role::filter(Request::only('search'))
                    ->paginate()
                    ->appends(Request::all())
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Roles/Create', [
            'roles' => RoleFunction::all()->mapToGroups(function ($item, $key) {
                return [$item['slug'] => [
                    'id' => $item['id'],
                    'cap' => $item['capability']
                ]];
            })
        ]);
    }

    public function store(RoleStoreRequest $request)
    {
        $role = Role::create(['name' => $request->get('name'), 'hide' => 0]);

        if( !empty($request->get('functions')) ) {
            foreach ($request->get('functions') as $function_id) {
                RoleHasFunction::create([
                    'role_id' => $role->id,
                    'function_id' => $function_id
                ]);
            }

        }


        return Redirect::route('roles')->with('success', 'Role created.');
    }

    public function edit(Role $role)
    {
        return Inertia::render('Roles/Edit', [
            'role' => new RoleResource($role),
            'roles' => RoleFunction::all()->mapToGroups(function ($item, $key) {
                return [$item['slug'] => [
                    'id' => $item['id'],
                    'cap' => $item['capability']
                ]];
            })
        ]);
    }

    public function update(Role $role, RoleUpdateRequest $request)
    {
        $role->update(
            ['name' => $request->get('name')]
        );

        // Delete all
        RoleHasFunction::where("role_id", $role->id)->delete();

        if( !empty($request->get('functions')) ) {
            foreach ($request->get('functions') as $function_id) {
                RoleHasFunction::create([
                    'role_id' => $role->id,
                    'function_id' => $function_id
                ]);
            }

        }

        return Redirect::back()->with('success', 'User updated.');
    }

    public function destroy(Role $role, RoleDeleteRequest $request)
    {
        // Delete all
        RoleHasFunction::where("role_id", $role->id)->delete();

        $role->delete();

        return Redirect::route('roles')->with('success', 'Role deleted.');
    }
}
