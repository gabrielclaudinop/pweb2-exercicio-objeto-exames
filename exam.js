class Exam {
    constructor(weight, correctAnswers) {
        this.weight = weight;
        this.correctAnswers = correctAnswers;
        this.studentsAnswers = [];
    }

    computarNota(respostasAluno) {
        let pontuacao = 0;
        for(let i = 0; i < respostasAluno.length; i++) {
            if (respostasAluno[i] == this.correctAnswers[i]) {
                pontuacao += this.weight[i];
            }
        }
        return pontuacao;
    }

    add(respostasAluno) {
        this.studentsAnswers.push(respostasAluno);
    }

    avg() {
        let pontuacaoTotal = 0;
        for (const respostasAluno of this.studentsAnswers) {
            let pontuacaoAluno = this.computarNota(respostasAluno);
            pontuacaoTotal += pontuacaoAluno;
        }
        return pontuacaoTotal/this.studentsAnswers.length;
    }

    min(qntdNotas) {
        const notasAlunos = [];
        for (const respostasAluno of this.studentsAnswers) {
            let pontuacaoAluno = this.computarNota(respostasAluno);
            notasAlunos.push(pontuacaoAluno);
        }
        const notasOrdenadas = notasAlunos.sort((a, b) => a - b);
        return notasOrdenadas.slice(0, qntdNotas);
    }

    max(qntdNotas) {
        const notasAlunos = [];
        for (const respostasAluno of this.studentsAnswers) {
            let pontuacaoAluno = this.computarNota(respostasAluno);
            notasAlunos.push(pontuacaoAluno);
        }
        const notasOrdenadas = notasAlunos.sort((a, b) => b - a);
        return notasOrdenadas.slice(0, qntdNotas);
    }

    lt(limite) {
        const menoresNotas = [];
        for (const respostasAluno of this.studentsAnswers) {
            let pontuacaoAluno = this.computarNota(respostasAluno);
            if (pontuacaoAluno < limite) {
                menoresNotas.push(pontuacaoAluno);
            }
        }
        return menoresNotas;
    }

    gt(limite) {
        const maioresNotas = [];
        for (const respostasAluno of this.studentsAnswers) {
            let pontuacaoAluno = this.computarNota(respostasAluno);
            if (pontuacaoAluno > limite) {
                maioresNotas.push(pontuacaoAluno);
            }
        }
        return maioresNotas;
    }
}

const pw2 = new Exam([2, 4, 4], ['a', 'd', 'b']);

pw2.add(['b', 'b', 'b']); // Nota: 4
pw2.add(['a', 'd', 'b']); // Nota: 10
pw2.add(['c', 'b', 'a']); // Nota: 0
pw2.add(['a', 'a', 'b']); // Nota: 6
pw2.add(['a', 'c', 'c']); // Nota: 2
pw2.add(['a', 'c', 'c']); // Nota: 2
pw2.add(['b', 'd', 'b']); // Nota: 8
pw2.add(['d', 'd', 'd']); // Nota: 4

// Média das notas
console.log(pw2.avg());

// Vetor com três menores notas
console.log(pw2.min(3)); 

// Vetor com cinco maiores notas
console.log(pw2.max(5));

// Vetor com todas as notas menores do que 5,0
console.log(pw2.lt(5));

// Vetor com todas as notas maiores do que 7,0
console.log(pw2.gt(7));