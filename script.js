document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.getElementById('file-upload');
    const previewContainer = document.getElementById('preview-container');
    const imagePreview = document.getElementById('image-preview');
    const fileNameDisplay = document.getElementById('file-name');
    const form = document.getElementById('project-form');
    const resultsSection = document.getElementById('results-section');
    const loader = document.getElementById('loader');
    const toast = document.getElementById('toast');

    fileUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            loader.classList.remove('hidden');
            resultsSection.classList.add('hidden');

            setTimeout(() => {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        imagePreview.src = e.target.result;
                        imagePreview.classList.remove('hidden');
                    }
                    reader.readAsDataURL(file);
                } else {
                    imagePreview.src = `https://placehold.co/300x200/475569/e2e8f0?text=Arquivo`;
                    imagePreview.classList.remove('hidden');
                }
                
                fileNameDisplay.textContent = file.name;
                previewContainer.classList.remove('hidden');
                previewContainer.classList.add('fade-in');

                simulateAICalculation();
                loader.classList.add('hidden');
            }, 2000);
        }
    });

    const staticResults = [
        {
            artType: 'Full Print (Complexo)',
            yarnNeeded: '1500 metros',
            yarnType: 'Poliéster Premium',
            printRecommendation: 'Sublimação HD',
            costPerPiece: 'R$ 18,50',
            productionTime: '7 dias úteis',
            justification: 'A alta complexidade e cobertura total (Full Print) exigem mais tinta e um processo de calandra mais lento, justificando o custo.',
            marketComparison: 'Peças com esta complexidade e qualidade de impressão são vendidas entre R$ 65 e R$ 80 no varejo.'
        },
        {
            artType: 'Estampa Localizada (Simples)',
            yarnNeeded: '750 metros',
            yarnType: 'Algodão 30.1 Penteado',
            printRecommendation: 'Silk Screen (2 cores)',
            costPerPiece: 'R$ 7,80',
            productionTime: '4 dias úteis',
            justification: 'Para estampas localizadas e com poucas cores, o Silk Screen oferece o melhor custo-benefício em produções acima de 50 peças.',
            marketComparison: 'Camisetas com estampas similares custam em média de R$ 35 a R$ 50 no mercado.'
        },
        {
            artType: 'Estampa Posicional (DTF)',
            yarnNeeded: '900 metros',
            yarnType: 'Malha PV (versátil)',
            printRecommendation: 'DTF (Direct to Film)',
            costPerPiece: 'R$ 12,30',
            productionTime: '5 dias úteis',
            justification: 'O DTF é ideal para artes com muitas cores ou gradientes em malhas mistas, oferecendo alta durabilidade e toque zero.',
            marketComparison: 'O valor de mercado para peças com estampa DTF de alta qualidade varia de R$ 50 a R$ 70.'
        },
         {
            artType: 'Padrão Corrido (Rotativo)',
            yarnNeeded: '2100 metros',
            yarnType: 'Viscolycra',
            printRecommendation: 'Estamparia Rotativa',
            costPerPiece: 'R$ 15,90',
            productionTime: '8 dias úteis',
            justification: 'A estamparia rotativa é indicada para grandes volumes de padrões contínuos, diluindo o custo do cilindro na produção.',
            marketComparison: 'Peças em viscolycra com estampa rotativa custam entre R$ 60 e R$ 90, dependendo da gramatura.'
        }
    ];

    function simulateAICalculation() {
        const randomIndex = Math.floor(Math.random() * staticResults.length);
        const result = staticResults[randomIndex];

        document.getElementById('result-art-type').textContent = result.artType;
        document.getElementById('result-yarn-needed').textContent = result.yarnNeeded;
        document.getElementById('result-yarn-type').textContent = result.yarnType;
        document.getElementById('result-print-recommendation').textContent = result.printRecommendation;
        document.getElementById('result-cost-per-piece').textContent = result.costPerPiece;
        document.getElementById('result-production-time').textContent = result.productionTime;
        document.getElementById('result-justification').textContent = result.justification;
        document.getElementById('result-market-comparison').textContent = result.marketComparison;

        resultsSection.classList.remove('hidden');
        resultsSection.classList.add('fade-in');
    }

    form.addEventListener('input', simulateAICalculation);

    document.getElementById('generate-quote').addEventListener('click', function() {
        toast.classList.remove('hidden');
        toast.classList.remove('fade-out');
        toast.classList.add('fade-in');
        
        setTimeout(() => {
            toast.classList.remove('fade-in');
            toast.classList.add('fade-out');
        }, 3000);
    });
});
