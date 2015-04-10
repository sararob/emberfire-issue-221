import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  open: DS.attr('boolean')
});
