$(document).ready(function () {


    const Coin = require('./coin.js');
    const Furry = require('./furry.js');

    var idSetInterval;


    class Game {
        constructor(board, furry, coin, score) {
            this.board = $('#board').find('div');
            this.furry = new Furry();
            this.coin = new Coin;
            this.score = 0;
            this.index = function (x, y) {
                return x + (y * 10);
            };

        }

        showFurry() {
            this.hideVisibleFury();
            return $(this.board[this.index(this.furry.x, this.furry.y)]).addClass('furry');
        }

        showCoin() {
            return $(this.board[this.index(this.coin.x, this.coin.y)]).addClass('coin');
        }

        startGame() {
            let self = this;
            idSetInterval = setInterval(function () {
                self.moveFurry();
            }, 250);
        }

        moveFurry() {
            if (this.furry.direction === 'right') {
                this.furry.x = this.furry.x + 1;
            } else if (this.furry.direction === 'left') {
                this.furry.x = this.furry.x - 1;
            } else if (this.furry.direction === 'up') {
                this.furry.y = this.furry.y - 1;
            } else if (this.furry.direction === 'down') {
                this.furry.y = this.furry.y + 1;
            }
            this.gameOver();
            this.checkCoinCollision();
            this.showCoin();
            this.showFurry();
        }

        hideVisibleFury() {
            for (let i = 0; i <= this.board.length; i++) {
                $(this.board[i]).removeClass('furry');
            }
        }

        turnFurry(event) {
            switch (event.which || event.keyCode) {
                case 37:
                    this.furry.direction = 'left';
                    break;
                case 38:
                    this.furry.direction = 'up';
                    break;
                case 39:
                    this.furry.direction = 'right';
                    break;
                case 40:
                    this.furry.direction = 'down';
                    break;
            }
        }

        checkCoinCollision() {
            if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
                $(this.board[this.index(this.coin.x, this.coin.y)]).removeClass('coin');
                this.score++;
                $('#score').find('strong').text(this.score);
                this.coin = new Coin();
                this.showCoin();
            }
        }

        gameOver() {


            if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {

                function stopInterval() {
                    clearInterval(idSetInterval);
                }
                stopInterval();

                this.hideVisibleFury();
                // $(board).css('display','none');
                // $(score).css('display','none');
                $(overSection).removeClass('invisible').addClass('visible');
                $('.visible').find('h1').text(`Game over!`);
                $('.visible').find('h3').text(`Your score: ${this.score}`);

            }
        }
    }


    var game = new Game();

    document.addEventListener('keydown', function(e) {
        game.turnFurry(e);

    });

<<<<<<< HEAD
    const board = $('#board');
    const score = $('#score');
    const playSection = $('#play');
    const overSection = $('#over');
    const btnPlayAgain = $(overSection).find('button');
    const btnPlay = $(playSection).find('button');
=======
    $('#over').find('button').on('click', function () {
                window.location.reload();
    });
>>>>>>> 2737e03eb4433173daf91bd1708a041fa0ee5e6e



    $(window).on('load', function (event) {
        event.stopPropagation();

        function stopInterval() {
            clearInterval(idSetInterval);
        }
        stopInterval();

            $(board).css('display', 'none');
            $(score).css('display', 'none');
            // overSection.css('display', 'none');

        $(btnPlay).on('click', function () {
            $(board).css('display', 'block');
            $(score).css('display', 'block');
            $(playSection).css('display', 'none');

            game.startGame();
            game.showCoin();


        });
    });

    $(btnPlayAgain).on('click', function () {
        location.reload();
    });



});

