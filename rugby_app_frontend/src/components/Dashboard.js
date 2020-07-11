import React from 'react';
import Standings from './Standings';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    
    render () {
        return (
            <div class="dashboard">
                <h1>Dashboard</h1>
                <Standings/>
                <div class="jumbotron" style={{padding:"2rem", margin:"2rem"}}>
                <h2 class="display-3">Rugby Union Bonus Points System</h2>
                <p class="lead"><ul>
                    <li>4 points for a win</li>
                    <li>2 points for a draw</li>
                    <li>0 points for losing a match</li>
                    <li>1 "bonus" point for winning while scoring at least 3 more tries than the opponent</li>
                    <li>1 "bonus" point for losing by no more than 8 points</li>
                </ul></p>
                <hr class="my-4"></hr>
                <p>The French professional league, Ligue Nationale de Rugby (LNR), uses a similar system in its two competitions, the Top 14 and Rugby Pro D2. After trialling the system in 2007–08, LNR adopted the new system permanently after that season.[1] This system prevents a losing team from picking up two bonus points in the same match, as is possible under the normal system.[2] It also means that neither team earns a bonus point in a drawn match.</p>
                <hr class="my-4"></hr>
                <p>[1]<i>"Article 330, Section 3.2. Points "terrain"" (PDF). Reglements de la Ligue Nationale de Rugby 2008/2009, Chapitre 2 : Règlement sportif du Championnat de France Professionnel (in French). Ligue Nationale de Rugby. Archived from the original (PDF) on 2012-02-17. Retrieved 2014-08-26.</i></p>
                <p>[2]<i>"French try out new bonus point system". Planet-Rugby.com. 2007-06-27. Archived from the original on 2007-09-29. Retrieved 2007-07-15.</i></p>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {loggedInStatus: state.loggedInStatus, user: state.user}
  }
  
export default connect(mapStateToProps)(Dashboard)