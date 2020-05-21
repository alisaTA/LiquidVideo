class RemoveFullNameFromQueries < ActiveRecord::Migration[5.2]
  def change
    remove_column :queries, :full_name, :string
  end
end
