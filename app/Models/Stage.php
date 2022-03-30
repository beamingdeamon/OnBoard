<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stage extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function stage_users()
    {
        return $this->hasMany(StageUser::class);
    }
}
