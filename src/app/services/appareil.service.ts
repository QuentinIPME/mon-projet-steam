import { Subject } from 'rxjs';

export class AppareilService {
  [x: string]: any;

  appareilsSubject = new Subject<any[]>();

  private appareils = [
      {
        id: 1,
        name: 'Machine à laver',
        status: 'éteint'
      },
      {
        id: 2,
        name: 'Frigo',
        status: 'allumé'
      },
      {
        id: 3,
        name: 'Ordinateur',
        status: 'éteint'
      }
    ];

    emitAppareilSubject() {
      this.appareilsSubject.next(this.appareils.slice());
    }

    getAppareilById(id: number) {
      const appareil = this.appareils.find(
        (appareilObject) => {
          return appareilObject.id === id;
        }
      );
      return appareil;
    }
  
    switchOnAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'allumé';
        }
        this.emitAppareilSubject();
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'éteint';
          this.emitAppareilSubject();
        }
    }

    switchOnOne(i : number){
      this.appareils[i].status = 'allumé';
      this.emitAppareilSubject();
    }

    switchOffOne(i : number){
      this.appareils[i].status = 'éteint';
      this.emitAppareilSubject();
    }

    onSwitch() {
      if(this.appareilStatus === 'allumé') {
        this.appareilService.switchOffOne(this.index);
      } else if(this.appareilStatus === 'éteint') {
        this.appareilService.switchOnOne(this.index);
      }
  }
  }
  