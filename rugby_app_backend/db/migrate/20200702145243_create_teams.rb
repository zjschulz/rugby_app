class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :wins
      t.integer :losses
      t.integer :draws
      t.integer :pf
      t.integer :pa
      t.integer :pd
      t.integer :bp
      t.integer :tp
      t.integer :user_id

      t.timestamps
    end
  end
end
