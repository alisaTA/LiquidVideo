class AddFirstNameToQueries < ActiveRecord::Migration[5.2]
  def change
    add_column :queries, :first_name, :string
    add_column :queries, :last_name, :string
    add_column :queries, :facility_count, :integer
    add_column :queries, :camera_count, :integer
    add_column :queries, :radar_count, :integer
  end
end
