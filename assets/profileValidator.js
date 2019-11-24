module.exports = function profileValidator(obj) {
    const params = [
        obj.city,
        obj.gender === 0 || obj.gender === 1,
        obj.age,
        obj.targetGender === 0 || obj.targetGender === 1 || obj.targetGender === 2,
        obj.aboutMe,
        obj.aboutTarget,
        obj.contacts,
    ];
    return params.every(elem => elem);
}