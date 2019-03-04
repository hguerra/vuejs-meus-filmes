<template>
  <div>
    <div class="lista-filmes">
      <Movie @onExcluir="excluirFilme" v-for="(filme, index) in filmes" :key="index" :filme="filme"></Movie>
    </div>

    <hr>
    <Form @onCriarFilme="criarFilme"></Form>
  </div>
</template>

<script>
import Movie from '@/components/movies/Movie.vue';
import Form from '@/components/movies/Form.vue'

export default {
  name: 'MovieList',
  components: {
    Movie,
    Form
  },
  methods: {
    criarFilme(filme) {
      this.filmes.push(filme);
    },
    excluirFilme(filme) {
      const indice = this.filmes.findIndex((item) => item.id === filme.id);
      if (indice > -1) {
        this.filmes.splice(indice, 1);
      }
    }
  },
  data() {
    return {
      filmes: [
        {
          id: Date.now().toString(),
          titulo: 'Feliz aniversario de Namoro',
          ano: '2019',
          produtora: 'Restaurando do INPE/Hocus',
          sinopse: 'Mozinho me agarrou no show',
          cartaz: 'https://lh3.googleusercontent.com/Hqd9vAH2To5y2NQ1a-VsxjZrGeGcRZfp1EuPdbtwArJwr8vU-CON8omrnWdjsm-vwemv93ARCkkXt0yocB3B4NQUX2_4Z8MnqarwIHTnoOJUSon2NMm8yB0tvVMsOQJt-502TiOkfO2ESA2RwNa-xh5a13bqfSsVqGQtbnh8jBrdf31b6bcZyqKGytF5PA0BhUOKLq73vNxaoX-6a6LWv5VPEBIrkcbrdbyHJ4cvblxFXe-EniDOCioD-Sb39cVcidknyeLLS086wsO9-CWASs_znU-IfD1Ry8eKu_z1p1giUyQBbTgQN6a920gaUrRtfXp8DlqCAv9ci9StlAk63_hng0HwptklDeVwF5dPdxi0accp64P-SFnjEdn9yt9zkEFTUmgZbp8tECfX-HXFIp6uf3mUQ4vNfl2ICGINU5Y-_1TYADPKcEbcPdrtN7kWeX01KfVoF2lWhXBHlDvtM3wCRaIYX836173Qe3dch0cvTlACAHI4B1JMcg94LeLuNx1uadHIai14F_0brRQ1qDNMe7JW-VlkUSPSOH_3Ar9rLAp13gQFYBb7Er-FWM3aJCVMBcB9gCH1pHBnCgYSZeYeN9g8NOTGyUO2qZ--m2_IGFUSugt09EjcxYMdKZvSHfBS7HGXiebba3W51eH_-z1nvHDKtUc=w1619-h910-no'
        }
      ]
    }
  }
};
</script>
