$(document).ready(() => {
    var i ;
    var j = $(".child-wrapper").length + 1;
    $("#foo").click(function () {
        let a = `<div id="child-wrapper` + j + `" class="child-wrapper">
    label c <input type="text" id="labelc`+ j + `"><br>
    label d <input type="text" id="labeld`+ j + `"><br>
    <button onclick="removeeChild(`+j+`)">remove child</button>
    <div id="nested-child-extender`+j+`">
        <input type="button" value="Add nested child" onclick="addNestedChild(`+j+`)">
     </div>
     </div>`       
        $("#child-form-extender").append(a);
        j++;
    })  

})

function addNestedChild(j) {
    var ncArr = [];
    i = $("#nested-child-extender" + j + " .nested-child-wrapper").length + 1
    let b = `<div id="nested-child-wrapper` + i+`" class="nested-child-wrapper">
        label e <input type="text" id="labele`+ i + j + `"><br>
        label f <input type="text" id="labelf`+ i + j + `"><br>
        <input type="button" value="remove nested child" onclick="removeNestedChild(`+i+`,`+j+`)">
     </div>`     
    $("#nested-child-extender"+j).append(b);
    i++;
}

function removeNestedChild(i,j){
    $("#nested-child-extender"+j+" #nested-child-wrapper"+i).remove();
    i--;
}
function removeeChild(j){
    $("#child-form-extender #child-wrapper"+j).remove();
    j--;
}

function getFormData(){
    var obj = {}
    obj.labela=$("#labela").val();
    obj.labelb=$("#labelb").val();
    obj.childlabel = (()=>initChildLabel())();
    console.log(obj);

    function initChildLabel(){
        var icl=[];
        $('.child-wrapper').each(function(index){
            var icObj={}
            icObj.labelc=$("#labelc"+(index+1)).val();
            icObj.labeld=$("#labeld"+(index+1)).val();
            icObj.nestedChildLabel = (()=>initNestedChild((index+1)))();
            icl.push(icObj)
        })
        return icl;
    }

    function initNestedChild(v){
        var inc = [];
        var h = $("#nested-child-extender"+v+" .nested-child-wrapper").length;       
        for(let x=1;x<=h;x++){
            var incObj = {}
            incObj.labele = $("#nested-child-extender"+v+" #nested-child-wrapper"+x+" #labele"+x+v).val();
            incObj.labelf= $("#nested-child-extender"+v+" #nested-child-wrapper"+x+" #labele"+x+v).val();
            inc.push(incObj);
        }
        return inc;
    }


}