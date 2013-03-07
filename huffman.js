function tree(left,right,data){
        this.left=left
        this.right=right
        this.data=data
        }
function encode(z,i){
        dig = []
        
        while (i!=z.data[0]){ 
             if (z.left.data[0].indexOf(i)!=-1){
                  dig.push('0')
                  z=z.left}
             else if (z.right.data[0].indexOf(i)!=-1){
                  dig.push('1')
                  z=z.right}  
             }
        hai = dig.join('')
        console.log("haaaai=",hai)        
        return hai
        }

function decode(r,z){
     nw = z
     word = ''
     for (var i in r){
         if (r[i] == "1"){
              z = z.right}
         else if (r[i] == "0"){
              z = z.left}
         if (z.left == null || z.right == null){
              word = word + z.data[0] 
              z = nw}
        }
     return word
        }
function sorting(o){
        l = []
        
        for (var i in o){
                l.push(new tree(null,null,o[i]))
                }
                console.log(l)
                
        while (l.length>1){
                f = l.pop()
                s = l.pop()
                h = [f.data[0]+s.data[0],f.data[1]+s.data[1]]
                l.push(new tree(f,s,h))
                l.sort(function(c,d){return d.data[1]-c.data[1]})
                }
        z = l.pop()
        return z

        }

function main(){
    d = {}
    o = []
    res = ''
    q = ''
    str = "rasheedh"
    
    for (var c in str){
        if (str[c] in d){
            d[str[c]] =d[str[c]]+1}
        else  
            d[str[c]]= 0}
    for (var key in d){
        o.push([key,d[key]])          
        }
        
    o.sort(function(a,b){return b[1]-a[1]})
        
    z=sorting(o)
    for(var c in str){
        d = encode(z,str[c])
        toString(d)
        res=res+d 
        }   
    console.log("Here is the encoded string",res)
        r=res
        q = decode(r,z)
    console.log ("Here is the decoded digit",q)
        }
main()
