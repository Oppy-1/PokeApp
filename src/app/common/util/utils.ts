// recorrer el string type mapear con un swich los distintos tipos y retornar el color de cada uno

export const getColorByType = (type: string): string[] => {
  let color: string = '';
  let img: string = '';
  switch (type) {
    case 'AGUA':
      img = '/assets/img/tipos/agua.png';
      color = '#4d92d5';
      break;
    case 'PLANTA':
      img = '/assets/img/tipos/planta.png';
      color = '#66ba5c';
      break;
    case 'VENENO':
      img = '/assets/img/tipos/veneno.png';
      color = '#AC6BC8';
      break;
    case 'FUEGO':
      img = '/assets/img/tipos/fuego.png';
      color = '#FC9D52';
      break;
    case 'TIERRA':
      img = '/assets/img/tipos/tierra.png';
      color = '#d47847';
      break;
    case 'ELECTRICO':
      img = '/assets/img/tipos/electrico.png';
      color = '#f4d239';
      break;
    case 'ROCA':
      img = '/assets/img/tipos/roca.png';
      color = '#C8B68A';
      break;
    case 'HADA':
      img = '/assets/img/tipos/hada.png';
      color = '#EC90E7';
      break;
    case 'SINIESTRO':
      img = '/assets/img/tipos/siniestro.png';
      color = '#5b5365';
      break;
    case 'FANTASMA':
      img = '/assets/img/tipos/fantasma.png';
      color = '#5269ad';
      break;
    case 'LUCHA':
      img = '/assets/img/tipos/lucha.png';
      color = '#cc3d69';
      break;
    case 'ACERO':
      img = '/assets/img/tipos/acero.png';
      color = '#598ea2';
      break;
    case 'PSIQUICO':
      img = '/assets/img/tipos/psiquico.png';
      color = '#f97077';
      break;
    case 'HIELO':
      img = '/assets/img/tipos/hielo.png';
      color = '#73cebf';
      break;
    case 'NORMAL':
      img = '/assets/img/tipos/normal.png';
      color = '#8f99a1';
      break;
    case 'BICHO':
      img = '/assets/img/tipos/bicho.png';
      color = '#8fc02d';
      break;
    case 'DRAGON':
      img = '/assets/img/tipos/dragon.png';
      color = '#096cc3';
      break;
    case 'VOLADOR':
      img = '/assets/img/tipos/volador.png';
      color = '#92aadd';
      break;
    default:
      color = '#EEEBEA';
  }
  return [color, img];
};
/*    
<div class="flex-row flex-1">
      <div
        class=" border border-solid border-b-slate-200"
        *ngFor="let skill of skills; let i = index"
      >
        <p class="text-xl" *ngIf="i < 4">Nombre: {{ skill.name }}</p>
        <p *ngIf="i < 4">Efecto: {{ skill.efecto }}</p>
        <p *ngIf="i < 4">Acierto: {{ skill.percent }}</p>
        <p *ngIf="i < 4">Poder: {{ skill.power }}</p>
    </div>
  </div>
 */