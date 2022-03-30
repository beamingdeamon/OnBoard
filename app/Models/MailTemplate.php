<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MailTemplate extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $attributes = [
        'title' => 'Новый шаблон',
        'description' => 'Контент шаблона',
    ];
}
