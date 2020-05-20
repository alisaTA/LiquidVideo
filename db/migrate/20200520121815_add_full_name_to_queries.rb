class AddFullNameToQueries < ActiveRecord::Migration[5.2]
  def change
    add_column :queries, :full_name, :string
  end
end
