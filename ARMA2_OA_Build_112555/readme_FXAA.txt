Details
===
Since ArmA2OA build 88147 it is possible to use post processing anti-aliasing 
namely FXAA (Fast Approximate Anti-Aliasing ),version used: 3.11

Default
===
The FXAA is by default disabled. (PPAA=0;)

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
 0 - FXAA_QUALITY_PRESET_12 
 1 - FXAA_QUALITY_PRESET_22
 2 - FXAA_QUALITY_PRESET_26
 3 - FXAA_QUALITY_PRESET_39

Complexity of quality settings are based on default FXAA settings (version 3.11)
 
NOTE: FXAA can be enabled even if Post-Processing was disabled in advanced video options!

Sources
===
http://timothylottes.blogspot.com/2011/07/fxaa-311-released.html
http://timothylottes.blogspot.com/2011/03/nvidia-fxaa.html
http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf

Legal
===
Special thanks to NVIDIA Corporation

NVIDIA FXAA 3.11 by TIMOTHY LOTTES
------------------------------------------------------------------------------
COPYRIGHT (C) 2010, 2011 NVIDIA CORPORATION. ALL RIGHTS RESERVED.
------------------------------------------------------------------------------
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THIS SOFTWARE IS PROVIDED
*AS IS* AND NVIDIA AND ITS SUPPLIERS DISCLAIM ALL WARRANTIES, EITHER EXPRESS
OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. IN NO EVENT SHALL NVIDIA
OR ITS SUPPLIERS BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, OR
CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR
LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION,
OR ANY OTHER PECUNIARY LOSS) ARISING OUT OF THE USE OF OR INABILITY TO USE
THIS SOFTWARE, EVEN IF NVIDIA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
DAMAGES.