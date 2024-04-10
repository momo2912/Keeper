const saveTimerStats = async (req, res) => {
  const db = req.app.get('db');
  const { workedTime } = req.body;
  const isTableExist = await db.schema.hasTable('timers');
  try {
    if(!isTableExist) {
      await db.schema.createTable('timers', function (table) {
        table.primary('id');
        table.increments('id');
        table.integer('worked_time');
      });
    }
    await db('timers').insert({
      worked_time: workedTime
    })
    res.status(201).json({
      message: 'Work time saved.'
    });
  } catch (error) {
    res.status(500).send(error);
  }
}

const getTimerStats = async(req, res) => {
  
}

module.exports = {
  saveTimerStats
};