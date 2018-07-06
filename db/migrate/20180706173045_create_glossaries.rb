class CreateGlossaries < ActiveRecord::Migration
  def change
    create_table :glossaries do |t|
      t.text :name
      t.text :description

      t.timestamps null: false
    end
  end
end
