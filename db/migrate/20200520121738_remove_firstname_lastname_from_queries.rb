class RemoveFirstnameLastnameFromQueries < ActiveRecord::Migration[5.2]
  def change
    remove_column :queries, :firstname, :string
    remove_column :queries, :lastname, :string
  end
end
