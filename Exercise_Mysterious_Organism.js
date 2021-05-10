// Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

//1. Look over the starter code. There are two helper functions: returnRandBase() and mockUpStrand().DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() is called, it will randomly select a base and return the base ('A','T','C', or 'G'). mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases. You’ll use these helper functions later to create your objects that represent P. aequor.


//2. Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:The first parameter is number (no two organisms should have the same number).The second parameter is an array of 15 DNA bases. pAequorFactor() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided. You’ll also add more methods to this returned object in the later steps.


//3.  Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA). To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate(). mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna. For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.

//4.  Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add a new method (.compareDNA()) to the returned object of the factory function.compareDNA() has one parameter, another pAequor object. The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.

//5. P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases. In the returned object of pAequorFactory(), add another method .willLikelySurvive().willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


const pAequorFactor = (number,array)=>{
  return{
    specimenNum:number,
    dna:array,
    mutate(){
      let i = Math.floor(Math.random()*this.dna.length);
      let base_i = this.dna[i];
      let altBases = ['A', 'T', 'C', 'G'];
      altBases.splice(altBases.indexOf(base_i),1);
      let selectBase = altBases[Math.floor(Math.random()*3)]
      this.dna[i] = selectBase
      return this.dna
    },
    compareDNA(input){
      let contador = 0;
      for(i = 0 ;i < input.length;i++){
        if(input[i] === this.dna[i]){
          contador+=1
        }
      }
      return console.log('specimen #1 and specimen #2 have ' + (contador/input.length)*100 +'% DNA in common')
    },
    willLikelySurvive(){
      const c_and_g = this.dna.filter(letter => letter === 'C' || letter === 'G');
      if(c_and_g.length/this.dna.length > 0.6){
        return true
      } else {
        return false
      }
    }
  }
}

const prueba = pAequorFactor(1,mockUpStrand())
console.log(prueba)
const pruebaMuate = prueba.mutate()
console.log(pruebaMuate)
prueba.compareDNA(mockUpStrand())
const pruebawill = prueba.willLikelySurvive()
console.log(pruebawill)
