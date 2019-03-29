export class AppareilService {
  [x: string]: any;
    appareils = [
      {
        name: 'Machine à laver',
        status: 'éteint'
      },
      {
        name: 'Frigo',
        status: 'allumé'
      },
      {
        name: 'Ordinateur',
        status: 'éteint'
      }
    ];
  
    switchOnAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'allumé';
        }
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'éteint';
        }
    }

    switchOnOne(i : number){
      this.appareils[i].status = 'allumé';
    }

    switchOffOne(i : number){
      this.appareils[i].status = 'éteint';1
    }

    onSwitch() {
      if(this.appareilStatus === 'allumé') {
        this.appareilService.switchOffOne(this.index);
      } else if(this.appareilStatus === 'éteint') {
        this.appareilService.switchOnOne(this.index);
      }
  }
  }
  