# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180406024313) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "backings", force: :cascade do |t|
    t.integer "reward_id", null: false
    t.integer "user_id", null: false
    t.integer "amount", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "category_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_name"], name: "index_categories_on_category_name", unique: true
  end

  create_table "projects", force: :cascade do |t|
    t.string "title", default: "untitled"
    t.integer "current_funding", default: 0
    t.integer "funding_goal"
    t.boolean "funded", default: false
    t.string "summary", null: false
    t.string "body"
    t.integer "creator_id", null: false
    t.datetime "deadline"
    t.string "category", null: false
    t.string "subcategory"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.boolean "live", default: false
    t.string "location"
    t.string "youtube"
    t.index ["category"], name: "index_projects_on_category"
    t.index ["title"], name: "index_projects_on_title"
  end

  create_table "rewards", force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "amount", null: false
    t.string "title", null: false
    t.string "body", null: false
    t.datetime "delivery_date"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.string "biography"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
