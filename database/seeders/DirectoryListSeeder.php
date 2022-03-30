<?php

namespace Database\Seeders;

use App\Models\DirectoryList;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DirectoryListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $lists = [
            [
                'name'  =>  'Направление деятельности',
                'link'  =>  'directions',
            ],
            [
                'name'  =>  'Опыт работы',
                'link'  =>  'work-experiences',
            ],
            [
                'name'  =>  'График работы',
                'link'  =>  'schedules',
            ],
            [
                'name'  =>  'Тип занятости',
                'link'  =>  'employment-types',
            ],
            [
                'name'  =>  'Языки',
                'link'  =>  'languages',
            ],
            [
                'name'  =>  'Страны',
                'link'  =>  'countries',
            ],
            [
                'name'  =>  'Степень образования',
                'link'  =>  'education-levels',
            ],
            [
                'name'  =>  'Режим работы',
                'link'  =>  'work-modes',
            ],
            [
                'name'  =>  'Причина поиска кандидата',
                'link'  =>  'search-reasons',
            ],
        ];
        DirectoryList::insert($lists);
    }
}
