<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RoleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'functions' => ! empty($this->functions) ? $this->functions->mapWithKeys(function ($item) {
                return [$item['id'] => $item['id']];
            })->values() : []
        ];
    }
}
