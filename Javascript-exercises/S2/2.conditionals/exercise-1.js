
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for( var student of alumns){
    let tApproved = 0;

    if (student.T1 == true) {
        tApproved++;
    }
    if(student.T2 == true){
        tApproved++
    }
    if ( student.T3 == true){
        tApproved++;
    }
student.isApproved = tApproved >= 2;
    // console.log(student);
    }

console.log(alumns);
