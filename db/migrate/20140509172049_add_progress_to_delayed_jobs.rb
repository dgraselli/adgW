class AddProgressToDelayedJobs < ActiveRecord::Migration
  def change
    add_column :delayed_jobs, :progres, :int
  end
end
