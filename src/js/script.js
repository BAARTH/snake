var snake = function(){
    this.pos_x = 0;
    this.pos_y = 0;
    this.couleur = '#000000';
    this.vitesse = 1;
    this.direction = 'top';
    this.queue = new Array();
    this.point = 0;
    this.en_vie = true;
    this.keycode;
    this.deplacer = function(){};
    this.changer_vitesse = function(){};
    this.augmenter_taille = function(){};
    this.manger = function(){};
    this.afficher = function(){};
    this.collision = function(){};
    this.change_color = function(){};
}

var diamond = function(){
    this.pos_x = 0;
    this.pos_y = 0;
    this.deplacer = function(){};
    this.afficher = function(){};
    this.supprimer = function(){};
}