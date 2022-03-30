<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    public function run()
    {
        $permissions = [
            [
                'id'    => 1,
                'title' => 'user_management_access',
            ],
            [
                'id'    => 2,
                'title' => 'permission_create',
            ],
            [
                'id'    => 3,
                'title' => 'permission_edit',
            ],
            [
                'id'    => 4,
                'title' => 'permission_show',
            ],
            [
                'id'    => 5,
                'title' => 'permission_delete',
            ],
            [
                'id'    => 6,
                'title' => 'permission_access',
            ],
            [
                'id'    => 7,
                'title' => 'role_create',
            ],
            [
                'id'    => 8,
                'title' => 'role_edit',
            ],
            [
                'id'    => 9,
                'title' => 'role_show',
            ],
            [
                'id'    => 10,
                'title' => 'role_delete',
            ],
            [
                'id'    => 11,
                'title' => 'role_access',
            ],
            [
                'id'    => 12,
                'title' => 'user_create',
            ],
            [
                'id'    => 13,
                'title' => 'user_edit',
            ],
            [
                'id'    => 14,
                'title' => 'user_show',
            ],
            [
                'id'    => 15,
                'title' => 'user_delete',
            ],
            [
                'id'    => 16,
                'title' => 'user_access',
            ],
            [
                'id'    => 17,
                'title' => 'directory_access',
            ],
            [
                'id'    => 18,
                'title' => 'goal_create',
            ],
            [
                'id'    => 19,
                'title' => 'goal_edit',
            ],
            [
                'id'    => 20,
                'title' => 'goal_show',
            ],
            [
                'id'    => 21,
                'title' => 'goal_delete',
            ],
            [
                'id'    => 22,
                'title' => 'goal_access',
            ],
            [
                'id'    => 23,
                'title' => 'workout_access',
            ],
            [
                'id'    => 24,
                'title' => 'workout_category_create',
            ],
            [
                'id'    => 25,
                'title' => 'workout_category_edit',
            ],
            [
                'id'    => 26,
                'title' => 'workout_category_show',
            ],
            [
                'id'    => 27,
                'title' => 'workout_category_delete',
            ],
            [
                'id'    => 28,
                'title' => 'workout_category_access',
            ],
            [
                'id'    => 29,
                'title' => 'workout_item_create',
            ],
            [
                'id'    => 30,
                'title' => 'workout_item_edit',
            ],
            [
                'id'    => 31,
                'title' => 'workout_item_show',
            ],
            [
                'id'    => 32,
                'title' => 'workout_item_delete',
            ],
            [
                'id'    => 33,
                'title' => 'workout_item_access',
            ],
            [
                'id'    => 34,
                'title' => 'workout_tag_create',
            ],
            [
                'id'    => 35,
                'title' => 'workout_tag_edit',
            ],
            [
                'id'    => 36,
                'title' => 'workout_tag_show',
            ],
            [
                'id'    => 37,
                'title' => 'workout_tag_delete',
            ],
            [
                'id'    => 38,
                'title' => 'workout_tag_access',
            ],
            [
                'id'    => 39,
                'title' => 'activity_level_create',
            ],
            [
                'id'    => 40,
                'title' => 'activity_level_edit',
            ],
            [
                'id'    => 41,
                'title' => 'activity_level_show',
            ],
            [
                'id'    => 42,
                'title' => 'activity_level_delete',
            ],
            [
                'id'    => 43,
                'title' => 'activity_level_access',
            ],
            [
                'id'    => 44,
                'title' => 'workout_feedback_create',
            ],
            [
                'id'    => 45,
                'title' => 'workout_feedback_edit',
            ],
            [
                'id'    => 46,
                'title' => 'workout_feedback_show',
            ],
            [
                'id'    => 47,
                'title' => 'workout_feedback_delete',
            ],
            [
                'id'    => 48,
                'title' => 'workout_feedback_access',
            ],
            [
                'id'    => 49,
                'title' => 'sleepcast_access',
            ],
            [
                'id'    => 50,
                'title' => 'sleepcast_category_create',
            ],
            [
                'id'    => 51,
                'title' => 'sleepcast_category_edit',
            ],
            [
                'id'    => 52,
                'title' => 'sleepcast_category_show',
            ],
            [
                'id'    => 53,
                'title' => 'sleepcast_category_delete',
            ],
            [
                'id'    => 54,
                'title' => 'sleepcast_category_access',
            ],
            [
                'id'    => 55,
                'title' => 'sleepcast_tag_create',
            ],
            [
                'id'    => 56,
                'title' => 'sleepcast_tag_edit',
            ],
            [
                'id'    => 57,
                'title' => 'sleepcast_tag_show',
            ],
            [
                'id'    => 58,
                'title' => 'sleepcast_tag_delete',
            ],
            [
                'id'    => 59,
                'title' => 'sleepcast_tag_access',
            ],
            [
                'id'    => 60,
                'title' => 'sleepcast_item_create',
            ],
            [
                'id'    => 61,
                'title' => 'sleepcast_item_edit',
            ],
            [
                'id'    => 62,
                'title' => 'sleepcast_item_show',
            ],
            [
                'id'    => 63,
                'title' => 'sleepcast_item_delete',
            ],
            [
                'id'    => 64,
                'title' => 'sleepcast_item_access',
            ],
            [
                'id'    => 65,
                'title' => 'sleepcast_feedback_create',
            ],
            [
                'id'    => 66,
                'title' => 'sleepcast_feedback_edit',
            ],
            [
                'id'    => 67,
                'title' => 'sleepcast_feedback_show',
            ],
            [
                'id'    => 68,
                'title' => 'sleepcast_feedback_delete',
            ],
            [
                'id'    => 69,
                'title' => 'sleepcast_feedback_access',
            ],
            [
                'id'    => 70,
                'title' => 'meditation_access',
            ],
            [
                'id'    => 71,
                'title' => 'meditation_category_create',
            ],
            [
                'id'    => 72,
                'title' => 'meditation_category_edit',
            ],
            [
                'id'    => 73,
                'title' => 'meditation_category_show',
            ],
            [
                'id'    => 74,
                'title' => 'meditation_category_delete',
            ],
            [
                'id'    => 75,
                'title' => 'meditation_category_access',
            ],
            [
                'id'    => 76,
                'title' => 'meditation_sub_category_create',
            ],
            [
                'id'    => 77,
                'title' => 'meditation_sub_category_edit',
            ],
            [
                'id'    => 78,
                'title' => 'meditation_sub_category_show',
            ],
            [
                'id'    => 79,
                'title' => 'meditation_sub_category_delete',
            ],
            [
                'id'    => 80,
                'title' => 'meditation_sub_category_access',
            ],
            [
                'id'    => 81,
                'title' => 'meditation_tag_create',
            ],
            [
                'id'    => 82,
                'title' => 'meditation_tag_edit',
            ],
            [
                'id'    => 83,
                'title' => 'meditation_tag_show',
            ],
            [
                'id'    => 84,
                'title' => 'meditation_tag_delete',
            ],
            [
                'id'    => 85,
                'title' => 'meditation_tag_access',
            ],
            [
                'id'    => 86,
                'title' => 'meditation_item_create',
            ],
            [
                'id'    => 87,
                'title' => 'meditation_item_edit',
            ],
            [
                'id'    => 88,
                'title' => 'meditation_item_show',
            ],
            [
                'id'    => 89,
                'title' => 'meditation_item_delete',
            ],
            [
                'id'    => 90,
                'title' => 'meditation_item_access',
            ],
            [
                'id'    => 91,
                'title' => 'meditation_feedback_create',
            ],
            [
                'id'    => 92,
                'title' => 'meditation_feedback_edit',
            ],
            [
                'id'    => 93,
                'title' => 'meditation_feedback_show',
            ],
            [
                'id'    => 94,
                'title' => 'meditation_feedback_delete',
            ],
            [
                'id'    => 95,
                'title' => 'meditation_feedback_access',
            ],
            [
                'id'    => 96,
                'title' => 'recipe_access',
            ],
            [
                'id'    => 97,
                'title' => 'recipe_category_create',
            ],
            [
                'id'    => 98,
                'title' => 'recipe_category_edit',
            ],
            [
                'id'    => 99,
                'title' => 'recipe_category_show',
            ],
            [
                'id'    => 100,
                'title' => 'recipe_category_delete',
            ],
            [
                'id'    => 101,
                'title' => 'recipe_category_access',
            ],
            [
                'id'    => 102,
                'title' => 'recipe_sub_category_create',
            ],
            [
                'id'    => 103,
                'title' => 'recipe_sub_category_edit',
            ],
            [
                'id'    => 104,
                'title' => 'recipe_sub_category_show',
            ],
            [
                'id'    => 105,
                'title' => 'recipe_sub_category_delete',
            ],
            [
                'id'    => 106,
                'title' => 'recipe_sub_category_access',
            ],
            [
                'id'    => 107,
                'title' => 'recipe_tag_create',
            ],
            [
                'id'    => 108,
                'title' => 'recipe_tag_edit',
            ],
            [
                'id'    => 109,
                'title' => 'recipe_tag_show',
            ],
            [
                'id'    => 110,
                'title' => 'recipe_tag_delete',
            ],
            [
                'id'    => 111,
                'title' => 'recipe_tag_access',
            ],
            [
                'id'    => 112,
                'title' => 'recipe_item_create',
            ],
            [
                'id'    => 113,
                'title' => 'recipe_item_edit',
            ],
            [
                'id'    => 114,
                'title' => 'recipe_item_show',
            ],
            [
                'id'    => 115,
                'title' => 'recipe_item_delete',
            ],
            [
                'id'    => 116,
                'title' => 'recipe_item_access',
            ],
            [
                'id'    => 117,
                'title' => 'subscription_access',
            ],
            [
                'id'    => 118,
                'title' => 'transaction_create',
            ],
            [
                'id'    => 119,
                'title' => 'transaction_edit',
            ],
            [
                'id'    => 120,
                'title' => 'transaction_show',
            ],
            [
                'id'    => 121,
                'title' => 'transaction_delete',
            ],
            [
                'id'    => 122,
                'title' => 'transaction_access',
            ],
            [
                'id'    => 123,
                'title' => 'subscription_type_create',
            ],
            [
                'id'    => 124,
                'title' => 'subscription_type_edit',
            ],
            [
                'id'    => 125,
                'title' => 'subscription_type_show',
            ],
            [
                'id'    => 126,
                'title' => 'subscription_type_delete',
            ],
            [
                'id'    => 127,
                'title' => 'subscription_type_access',
            ],
            [
                'id'    => 128,
                'title' => 'feedback_create',
            ],
            [
                'id'    => 129,
                'title' => 'feedback_edit',
            ],
            [
                'id'    => 130,
                'title' => 'feedback_show',
            ],
            [
                'id'    => 131,
                'title' => 'feedback_delete',
            ],
            [
                'id'    => 132,
                'title' => 'feedback_access',
            ],
            [
                'id'    => 133,
                'title' => 'page_create',
            ],
            [
                'id'    => 134,
                'title' => 'page_edit',
            ],
            [
                'id'    => 135,
                'title' => 'page_show',
            ],
            [
                'id'    => 136,
                'title' => 'page_delete',
            ],
            [
                'id'    => 137,
                'title' => 'page_access',
            ],
            [
                'id'    => 138,
                'title' => 'reminder_access',
            ],
            [
                'id'    => 139,
                'title' => 'remind_tap_create',
            ],
            [
                'id'    => 140,
                'title' => 'remind_tap_edit',
            ],
            [
                'id'    => 141,
                'title' => 'remind_tap_show',
            ],
            [
                'id'    => 142,
                'title' => 'remind_tap_delete',
            ],
            [
                'id'    => 143,
                'title' => 'remind_tap_access',
            ],
            [
                'id'    => 144,
                'title' => 'question_create',
            ],
            [
                'id'    => 145,
                'title' => 'question_edit',
            ],
            [
                'id'    => 146,
                'title' => 'question_show',
            ],
            [
                'id'    => 147,
                'title' => 'question_delete',
            ],
            [
                'id'    => 148,
                'title' => 'question_access',
            ],
            [
                'id'    => 149,
                'title' => 'answer_create',
            ],
            [
                'id'    => 150,
                'title' => 'answer_edit',
            ],
            [
                'id'    => 151,
                'title' => 'answer_show',
            ],
            [
                'id'    => 152,
                'title' => 'answer_delete',
            ],
            [
                'id'    => 153,
                'title' => 'answer_access',
            ],
            [
                'id'    => 154,
                'title' => 'profile_password_edit',
            ],
        ];

        Permission::insert($permissions);
    }
}
