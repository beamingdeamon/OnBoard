<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Psy\Util\Str;

class Vacancy extends Model
{
    use HasFactory;
    protected $attributes =
        ['vacancy_status_id' => 1];

    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function manager()
    {
        return $this->belongsTo(User::class,'manager_id','id');
    }
    public function company()
    {
        return $this->belongsTo(Company::class);
    }
    public function search_reason()
    {
        return $this->belongsTo(SearchReason::class);
    }
    public function position()
    {
        return $this->belongsTo(Position::class);
    }
    public function vacancy_status()
    {
        return $this->belongsTo(VacancyStatus::class);
    }
    public function structure()
    {
        return $this->belongsTo(Structure::class);
    }
    public function replies()
    {
        return $this->hasMany(VacancyReply::class);
    }
}
