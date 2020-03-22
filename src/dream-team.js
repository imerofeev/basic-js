module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
  return members.filter(x=>typeof(x)==='string').map(a=>a.trim()).map(a=>a[0].toUpperCase()).sort().join('');
};