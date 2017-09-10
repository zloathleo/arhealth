export default {
    binren: require('../jsons/binren.json'),

    keshi: require('../jsons/keshi.json'),
    jibing: require('../jsons/jibing.json'),
    zhenzhuang: require('../jsons/zhenzhuang.json'),

    //通过科室查询关联症状
    getSymptomFromDepartmentId: function (_depId) {

        //科室关联的症状
        let _result = new Set();

        let _ks = this.keshi[_depId];
        //科室关联疾病
        let _keshi_ref_disease = _ks.ref_disease;

        _keshi_ref_disease.forEach(function (_jbKey, index) {

            //疾病
            let _disease = this.jibing[_jbKey];

            if (_disease != undefined) {
                //疾病关联的症状
                let _jibing_ref_symptom = _disease.ref_symptom;

                _jibing_ref_symptom.forEach(function (_zhenzhuangKey, index) {
                    let _zhenzhuang = this.zhenzhuang[_zhenzhuangKey];
                    if (_zhenzhuang != undefined) {
                        _result.add(_zhenzhuang);
                    } else {
                        console.warn('症状表无该症状:' + _zhenzhuangKey);
                    }
                }.bind(this));
            } else {
                console.warn('疾病-症状表无该疾病:' + _jbKey);
            }
        }.bind(this))

        console.info(_result);
        return _result;
    }

}