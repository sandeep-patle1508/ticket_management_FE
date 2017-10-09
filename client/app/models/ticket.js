// import DS from 'ember-data';
// import { belongsTo } from 'ember-data/relationships';
//
// export default DS.Model.extend({
//
//
// });

import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: attr(),
  description: attr(),
  status: attr(),
  startedAt: attr(),
  resolvedAt: attr(),
  reporterId: attr(),
  assigneeId: attr(),
  assignorId: attr(),
  changeStatus: attr(),
  reporter: belongsTo('reporter', { async: true }),
  assignee: belongsTo('assignee', { async: true }),
  assignor: belongsTo('assignor', { async: true })
});
