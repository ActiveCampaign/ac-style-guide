class CreateChanges < ActiveRecord::Migration
  def change
    create_table :changes do |t|
      t.text :description
      t.date :date

      t.timestamps null: false
    end
  end
end
