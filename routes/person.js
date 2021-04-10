const {
    index, create
} = require('../controllers/person');

module.exports = router =>{
    router.get('/person',index);
    router.post('/person',create);
};