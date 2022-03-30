<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Structure extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function children()
    {
        return $this->hasMany(Structure::class,'parent_id','id');
    }
    public function structure_users()
    {
        return $this->hasMany(StructureUser::class);
    }
}
