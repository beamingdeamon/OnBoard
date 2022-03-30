<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function detail()
    {
        return $this->hasOne(CompanyDetail::class);
    }
    public function contacts()
    {
        return $this->hasMany(CompanyContact::class);
    }
    public function addresses()
    {
        return $this->hasMany(CompanyAddress::class);
    }
}
