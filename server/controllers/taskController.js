const createTask = async (req, res) => {
  const db = req.app.get('db');
  const { 
    taskName, 
    taskContent,
    taskStatus
  } = req.body;
  const isTableExist = await db.schema.hasTable('task');
  try {
    if(!isTableExist) {
      await db.schema.createTable('task', function(table) {
        table.primary('id');
        table.increments('id');
        table.string('task_name');
        table.string('task_content');
        table.string('task_status');
      })
    }
    await db('task').insert({
      task_name: taskName,
      task_content: taskContent,
      task_status: taskStatus
    });
    res.status(201).json({
      message: 'New task created.'
    });
  } catch (error) {
    res.status(500).send(error);
  }
}