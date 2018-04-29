Details
===
Since ArmA2OA build 89201 it is possible to use post processing anti-aliasing, 
namely SMAA (Enhanced Subpixel Morphological Anti-Aliasing), version used: 2.7

Settings
===
In arma2oa.cfg were added new config entries:
PPAA=<number>;
PPAA_Level=<number>;

Accepted values for PPAA are:
 0 - Disabled
 1 - FXAA
 2 - FXAA + sharp filter
 3 - SMAA

Accepted values for PPAA_Level are:
 0 - SMAA_PRESET_LOW
 1 - SMAA_PRESET_MEDIUM
 2 - SMAA_PRESET_HIGH
 3 - SMAA_PRESET_ULTRA 
 
Complexity of quality settings are based on default SMAA settings (version 2.7)

NOTE: SMAA can be enabled even if Post-Processing was disabled in video options! 

Sources:
===
Read more: http://www.iryoku.com/smaa/#downloads

Legal
===
Special thanks to Universidad de Zaragoza and Crytek
"Uses SMAA. Copyright (C) 2011 by Jorge Jimenez, Jose I. Echevarria, Belen Masia, Fernando Navarro and Diego Gutierrez."

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS ``AS 
IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, 
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR 
PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDERS OR CONTRIBUTORS 
BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are 
those of the authors and should not be interpreted as representing official
policies, either expressed or implied, of the copyright holders.