class AddFieldsToQueries < ActiveRecord::Migration[5.2]
  def change
    add_column :queries, :company_website, :string
    add_column :queries, :position, :string
    add_column :queries, :message, :text
  end
end
