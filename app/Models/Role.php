<?php

namespace App\Models;

use App\Models\RoleHasFunction;
use App\Models\RoleFunction;
class Role extends Model
{
    protected $table = "roles";

    public function getFunctionsAttribute()
    {
        return $this->functions();
    }

    public function functions()
    {
        return $this->belongsToMany(RoleFunction::class, 'roles_has_functions','role_id', 'function_id')->get();
    }

    public function hasCap($menu, $cap)
    {
        $func = $this->functions();
        $values = $func->mapWithKeys(function ($item) {
            return [$item['id'] => $item['capability']];
        })->values();

        if($menu == $this->slug && in_array($cap, $values->toArray()) ) {
            return true;
        }

        return false;
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('name', 'like', '%'.$search.'%');
        })->when($filters['trashed'] ?? null, function ($query, $trashed) {
            if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }
        });
    }
}
