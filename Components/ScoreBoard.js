import React, { Component } from 'react';
import styled from '@emotion/styled';
import ScoreBoardAnimate from '../assets/scoreBoardAnimate.js';

const ScoreBoard = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: repeat(5, auto);
  font-family: sans-serif;

  .Players{
    width: 100%;
    display: block;
    margin: 0 auto;
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: center;

    .editMode{
      margin-top: -1px;
      height: calc( 100vh - 90px);
      width: 98.3vw;
      background-color: #2c3965;
      color: white;
    }

    .Player1{
      font-size: 20px;
      display: grid;
      grid-template-columns: 50% 50%;
      align-self: center;
      align-items: center;
      text-align: center;
      grid-column-start: 1;
      grid-column-end: 3;

      input{
        margin-left: 10px;
      }
      .viewMode{
        height: 5px;
        z-index: -10;
      }
    }
    button{
      grid-column-start: 1;
      grid-column-end: 3;
      width: 150px; 
      height: 30px;
      margin: 0 auto;
    }
  }
  
  .title{
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: center;
  }

  .name{
    margin: 0;
    min-height: 40px;
    font-size: 30px;
    grid-row-start: 1;
    grid-row-end: 2;
  }

	.team1, .team2 {
		grid-column-start: 0;
		width: 100%;
		text-align: center;
    grid-row-start: 2;

    .score{
      font-weight: bold;
      font-family: sans-serif;
      font-size: 100px;
      margin-top: 10px;
      margin-bottom: 30px;
    }
		.scoreButtons {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 19.5%);
      grid-template-rows: repeat(3, 80px);
      grid-gap: 3px;
      margin-bottom: 40px;

      .Team1Score, .Team2Score{
        padding: 0;
        grid-column-start: 2;
        grid-column-end: 5;
        font-size: 36px;
      }
		}
	}
`;

const RemoveScore = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: background-repeat(3,100px);
  
  h3{
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  button{
    width: 120px;
    height: 40px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  .scoreDeduction{
    width: 60px;
    height: 40px;
  }

  .teamSelected{
    background-color: #2c3965;
    color: white;
  }
`;

const ResetButton = styled.button`
  font-family: sans-serif;
  height: 40px;
  width: 120px;
  display: block;
  margin: 0 auto;
  font-size: 20px;
  margin-bottom: 30px;
`;

const Stats = styled.div`
  margin-top: 20px; 
  font-family: sans-serif;

  
`;

const PlayerStats = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: center;

  @media(max-width: 450px){
    grid-template-columns: 100%;
  }
`;

const Head2Head = styled.div`
  text-align: center;
`;

const TeamOne = 'TeamOneScore';
const TeamTwo = 'TeamTwoScore';

function ScoreAnimate(TEAM) {
  document.getElementById(TEAM).classList.add('bucket');
  setTimeout(() => {
    document.getElementById(TEAM).classList.remove('bucket');
  }, 1500);
}
// THIS IS STATE!!!!
class Scoreboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      P1NAME: 'Player 1',
      P2NAME: 'Player 2',
      P1SCORE: 0,
      P2SCORE: 0,
      P1BOX3: 0,
      P1BOX2: 0,
      P1BOX1: 0,
      P2BOX3: 0,
      P2BOX2: 0,
      P2BOX1: 0,
      MODE: 'edit',
      INPUT1: '',
      INPUT2: '',
      TEAMSELECT: 'Team1',
    }
  }
  // THIS IS STATE!!!

  TeamOne3 = () => {
    this.setState({ P1SCORE: this.state.P1SCORE + 3 });
    this.setState({ P1BOX3: this.state.P1BOX3 + 3 });
    ScoreAnimate(TeamOne);
  }
  TeamOneDeduct3 = () => {
    this.setState({ P1SCORE: this.state.P1SCORE - 3 });
    this.setState({ P1BOX3: this.state.P1BOX3 - 3 });
  }
  TeamOne2 = () => {
    this.setState({ P1SCORE: this.state.P1SCORE + 2 });
    this.setState({ P1BOX2: this.state.P1BOX2 + 2 });
    ScoreAnimate(TeamOne);
  }
  TeamOneDeduct2 = () => {
    this.setState({ P1SCORE: this.state.P1SCORE - 2 });
    this.setState({ P1BOX2: this.state.P1BOX2 - 2 });
  }
  TeamOne1 = () => {
    this.setState({ P1SCORE: this.state.P1SCORE + 1 });
    this.setState({ P1BOX1: this.state.P1BOX1 + 1 });
    ScoreAnimate(TeamOne);
  }
  TeamOneDeduct1 = () => {
    this.setState({ P1SCORE: this.state.P1SCORE - 1 });
    this.setState({ P1BOX1: this.state.P1BOX1 - 1 });
  }
  TeamTwo3 = () => {
    this.setState({ P2SCORE: this.state.P2SCORE + 3 });
    this.setState({ P2BOX3: this.state.P2BOX3 + 3 });
    ScoreAnimate(TeamTwo);
  }
  TeamTwoDeduct3 = () => {
    this.setState({ P2SCORE: this.state.P2SCORE - 3 });
    this.setState({ P2BOX3: this.state.P2BOX3 - 3 });
  }
  TeamTwo2 = () => {
    this.setState({ P2SCORE: this.state.P2SCORE + 2 });
    this.setState({ P2BOX2: this.state.P2BOX2 + 2 });
    ScoreAnimate(TeamTwo);
  }
  TeamTwoDeduct2 = () => {
    this.setState({ P2SCORE: this.state.P2SCORE - 2 });
    this.setState({ P2BOX2: this.state.P2BOX2 - 2 });
  }
  TeamTwo1 = () => {
    this.setState({ P2SCORE: this.state.P2SCORE + 1 });
    this.setState({ P2BOX1: this.state.P2BOX1 + 1 });
    ScoreAnimate(TeamTwo);
  }
  TeamTwoDeduct1 = () => {
    this.setState({ P2SCORE: this.state.P2SCORE - 1 });
    this.setState({ P2BOX1: this.state.P2BOX1 - 1 });
  }

  Reset = () => {
    this.setState({
      P1NAME: 'Player 1',
      P2NAME: 'Player 2',
      P1SCORE: 0,
      P2SCORE: 0,
      P1BOX3: 0,
      P1BOX2: 0,
      P1BOX1: 0,
      P2BOX3: 0,
      P2BOX2: 0,
      P2BOX1: 0,
    })
  }

  P1Name = (e) => {
    this.setState({ P1NAME: e.target.value });
  }
  P2Name = (e) => {
    this.setState({ P2NAME: e.target.value });
  }

  handleSave = () => {
    if (this.state.INPUT1 === '') {
      this.setState({ INPUT1: 'Player 1', MODE: 'view' });
    } else {
      this.setState({ P1NAME: this.state.INPUT1, P2NAME: this.state.INPUT2, MODE: 'view' });
    }
  }
  handleEdit = () => {
    this.setState({ MODE: 'edit' });
  }

  renderInputField() {
    if (this.state.MODE === 'view') {
      return <div className="viewMode"></div>;
    } else {
      return (
        <div className="editMode">
          <h3>
            Player 1 Name:
          <input
              onChange={this.P1Name}
              value={this.P1NAME}
              placeholder={this.P1NAME}
            />
          </h3>
          <h3>
            Player 2 Name:
          <input
              onChange={this.P2Name}
              value={this.P2NAME}
              placeholder={this.P2NAME}
            />
          </h3>
          {this.renderButton()}
        </div>
      );
    }
  }

  renderButton() {
    if (this.state.MODE === 'view') {
      return (
        <button onClick={this.handleEdit}>
          Edit Player Names
        </button>
      );
    } else {
      return (
        <button onClick={this.handleSave}>
          Save Player Names
        </button>
      );
    }
  }

  teamSelect1 = () => {
    this.setState({ TEAMSELECT: 'Team1' })
  }
  teamSelect2 = () => {
    this.setState({ TEAMSELECT: 'Team2' })
  }

  renderTeam() {
    if (this.state.TEAMSELECT === 'Team1') {
      return (
        <div className="deduction">
          <h3>Deduct from: {this.state.P1NAME}</h3>
          <button class="teamSelected" onClick={this.teamSelect1}>{this.state.P1NAME}</button>
          <button onClick={this.teamSelect2}>{this.state.P2NAME}</button>

          <div className="deductBtn">
            <button className="scoreDeduction" onClick={this.TeamOneDeduct3} >3</button>
            <button className="scoreDeduction" onClick={this.TeamOneDeduct2} >2</button>
            <button className="scoreDeduction" onClick={this.TeamOneDeduct1} >1</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="deduction">
          <h3>Deduct from: {this.state.P2NAME}</h3>
          <button onClick={this.teamSelect1}>{this.state.P1NAME}</button>
          <button class="teamSelected" onClick={this.teamSelect2}>{this.state.P2NAME}</button>

          <div className="deductBtn">
            <button className="scoreDeduction" onClick={this.TeamTwoDeduct3} >3</button>
            <button className="scoreDeduction" onClick={this.TeamTwoDeduct2} >2</button>
            <button className="scoreDeduction" onClick={this.TeamTwoDeduct1} >1</button>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <>
        <ScoreBoardAnimate>
          <ScoreBoard>
            <div className="Players">
              <div className="Player1">
                {this.renderInputField()}
              </div>
              {this.renderButton()}
            </div>

            <div className="team1">
              <h3 className="name">{this.state.P1NAME}</h3>
              <ScoreBoardAnimate className="score" id="TeamOneScore"> {this.state.P1SCORE} </ScoreBoardAnimate>

              <div className="scoreButtons">
                <button className="Team1Score" type="button" onClick={this.TeamOne3}>3</button>
                <button className="Team1Score" type="button" onClick={this.TeamOne2}>2</button>
                <button className="Team1Score" type="button" onClick={this.TeamOne1}>1</button>
              </div>
            </div>

            <div className="team2">
              <h3 className="name">{this.state.P2NAME}</h3>
              <ScoreBoardAnimate className="score" id="TeamTwoScore"> {this.state.P2SCORE} </ScoreBoardAnimate>

              <div className="scoreButtons">
                <button className="Team2Score" type="button" onClick={this.TeamTwo3}>3</button>
                <button className="Team2Score" type="button" onClick={this.TeamTwo2}>2</button>
                <button className="Team2Score" type="button" onClick={this.TeamTwo1}>1</button>
              </div>
            </div>

          </ScoreBoard>
        </ScoreBoardAnimate>

        <RemoveScore>
          {this.renderTeam()}
        </RemoveScore>

        <Stats>
          <PlayerStats>
            <div className="P1Stats">
              <h2>{this.state.P1NAME}'s Point Breakdown</h2>
              <h2>3's: {parseInt(Math.round((this.state.P1BOX3 / this.state.P1SCORE) * 100)) || 0}%</h2>
              <h2>2's: {parseInt(Math.round((this.state.P1BOX2 / this.state.P1SCORE) * 100)) || 0}%</h2>
              <h2>1's: {parseInt(Math.round((this.state.P1BOX1 / this.state.P1SCORE) * 100)) || 0}%</h2>
            </div>
            <div className="P2Stats">
              <h2>{this.state.P2NAME}'s Point Breakdown</h2>
              <h2>3's: {parseInt(Math.round((this.state.P2BOX3 / this.state.P2SCORE) * 100)) || 0}%</h2>
              <h2>2's: {parseInt(Math.round((this.state.P2BOX2 / this.state.P2SCORE) * 100)) || 0}%</h2>
              <h2>1's: {parseInt(Math.round((this.state.P2BOX1 / this.state.P2SCORE) * 100)) || 0}%</h2>
            </div>
          </PlayerStats>
          <Head2Head>
            <h2>{this.state.P1NAME} VS {this.state.P2NAME}</h2>
            <h3>3's: {this.state.P1BOX3 / 3} : {this.state.P2BOX3 / 3}</h3>
            <h3>2's: {this.state.P1BOX2 / 2} : {this.state.P2BOX2 / 2}</h3>
            <h3>1's: {this.state.P1BOX1} : {this.state.P2BOX1}</h3>
          </Head2Head>


        </Stats>
        <ResetButton type="button" onClick={this.Reset}>Reset</ResetButton>
      </>
    );
  }
}

export default Scoreboard;
