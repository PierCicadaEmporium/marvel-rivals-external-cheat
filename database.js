package main

import (
    "fmt"
    "sync"
    "time"
    "crypto/sha256"
)

var ( appVersion = "1.0" )

func tEsMRBplWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kuHfLhqqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uBY8LpfIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ePfuqf1QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MkLkS1y1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mWtH6Mp2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func prTHhUf2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fwDYMNebWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IyVUozxWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zQ1IlDSYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CZKTvtcPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8JkbgnAaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yefCK7dUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FbkLDUCsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Eeeh0DmtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ta74Ya2xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HVp2JG9iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FkV7XghiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NIEXzutoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func greODj8DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KKyc4xjUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bNGuTzHLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9xgskxM3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f88aQwIVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sSLhiSauWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JU3pFHR9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D3bT4DhCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S0LqOLe4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f52vKORnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2tEFaWvHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nfMYBRTGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XZWfeXHRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IQMu3gc9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F11fna5kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PUA5a5CVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p0ns6g4aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i05Wq2QuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SKrJZdHMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pTZBmuCJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8smSkcA2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vv2a0qnIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ILEtPjalWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nL2zjrZCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wf4e4BqZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fgrvLtD6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9UnYhCIDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q4YxgdMLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MkSic0S1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rxjyT1WoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hkMu7RiMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kx0wKZcWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5iw0k730Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xf5hK7JQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mtY1IUgiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AyX34EY5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ym2CONkIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UlHYXhqSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RSuAcHXSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yyEEKU7SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CTwMoywnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vcv1GqvSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nMDGQQieWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RcOKnhqrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xKvWEeHeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r12EJWlWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zq3u8NcoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pu1mCqR1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BxERW6NVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L9O5FQy2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1yBRcUExWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rW5LQi04Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wMMTt46AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JpGnhqBFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s1x7qiYbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0tTZHhkmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wCYSdG2SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uvNTrA0HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bOOKSoH2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dPQJwwZsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fgQuIpgdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mQmC2p9EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FHUnb9PkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UQkHSotCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Oji855OaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PhsO30SiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yHobFyFjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LBy6mnJoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kzmWEq93Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E4vUJJobWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X5dGeDwMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JFWkenNSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ss115Dc0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cMXsqbOVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uKqC6VZfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7oQoD6kEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ep5X6cBeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mGL7lGNEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pr7eGLBjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5ukYj3BcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ikovh7i7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mrFstYHpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bZAvx2bHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ihN1YmHvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cBWvKiTXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XBPAth1kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L58a7pDrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PMUOT7QzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qv15FE7lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p7D8a49fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XQERmJ59Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tucS7npIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 994ScSZbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SZ2Bu7mWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BG2AOpyOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tCGVA9wKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tKnVVpvZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lOan5iynWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HEgrxq09Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZoDXz62TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F1Ad6J2wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IgAxGDoEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kCOxevoEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bG0GxOliWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GwtUFLx2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iIKO2WIpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MTLsiHriWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BG6N6rueWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HdAUug6aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vwE68pahWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CnbZ4nKAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9tmgT88WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pK1ySF05Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZyvdpC5mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TZOPbWWBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fbLtQnmPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JfqpJGqJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bZqguSQcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mzJsG95DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PKWBDNApWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MZqw1rBnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2HQHOZiyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kVDtmwhLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5rH2WUxtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aV6mUUPkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xJrUHWWjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N8AOdl1OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QEvfyX9IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aFT3UHhnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IpU1AaB8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iDcsyPFBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6t8MoJkzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oCkI35R8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TVu6RFoCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m9TFI5wkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6ADJEPXIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cpwaCeDLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XVQziQ1HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZEYBKDcmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hps51c6cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t7UR0wpjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kyEzgZx5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func beZq2NQiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wmsNqTqWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xNMGS5GxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yLBdnuCyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6GhkHHLhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q4f7On7OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hqmiu1iQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7q6DoG8MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NZbLUTc1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Qe8KGwcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7HEGRZoEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8T5vvblAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 50Cxr8V5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func luU0VjcSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 12K6tUejWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mXMg1jpkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wd2KphRtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w74HjYS2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HBjFLyniWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iIkSRLswWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func diI1mU2GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tLVcAGsuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gywl4k1kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SRkgTzaEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DJEXbi5cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Mc6XyRNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xY5EUaxbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 98EblSOtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mpfe8CzeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7zX6GqT5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tayt21pPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7QxOGGIXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JnW8wsnSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RAri91VUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZuYkuyvHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CVhjeGwOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Twk0TE6BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 51tm7yslWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gozvuhGvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3f7DPjekWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 96iKkya5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XgywuPrRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cqOUHZVpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KoTwqxg4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3PBhcBQIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dxV7HuhQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Eh2n4bKVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TslU3uQGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EzPBn5GJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qWPLA86HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nshVP8sOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yO7LOsUmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JOYSm6adWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8wBbgvfyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M5MpAeEAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KQSuA5GKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IJ3JcrNYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7Vi8KzBsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PTk8GkSUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 51TIo0SQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QSPu7fd7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xp9K1WF2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6maeTlikWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 990OwD7nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1brkJzqtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eSRr33VFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QzxoWDVrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HJqYhT7fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jXBjWfA3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k6K86cA4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ou2bz4HXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K90Lh5XrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zHKRBuVfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7hsrOmYcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4f4p4icwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 65DO1sUtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gfMdLO36Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dXnXXQC4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ka3P87dUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func onmwYYV6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nXYfptNFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FygX0KMPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7qyrpPWBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DRdOci9AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HAFHeI2tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PUEYaSKYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dZx1GQ34Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yJOQZLy2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func asjO9r6kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KeI8A2B0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3ESVOXFBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bGtMXww2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MB6cY6k0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1rfdLmWgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dZpcfoMbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uGItZOn3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NueAeQn9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jstpaWlbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uQZlYQisWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 75nKnXwOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gdL4xfkqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZT10SaFeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ipxr00KqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wClYh6TUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v2CSqyglWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3hoXilKCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xvsg1vU2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3ceyo8dmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mZFDgfTqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IrlxfiQRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gchxnbLnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fh50FqJTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nVaCZq4UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GZEeQJfxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SaGTQVKGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LheCnQKyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func su0okD4PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SPfY0XHHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MCtGf7CmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oy9DnSb9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5PJa5vtpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dUzuU5JCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5lNSOnQ4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JyR2o0reWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EVp7wlXfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wRH6iLW3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YbE0qYD8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CnQGlCtSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0PoGnTfTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3OG0D8UjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NreBDonkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2gDHogmCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5JY44muQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O31C6IAZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r2P6ZEo5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s24A6McyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nIq9ySY4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2ENPXiZJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NNcUyYl3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9OWJ5fFTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uAQSZALRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SlhxujmXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qm3U57gZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b8JRi8ZRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yzxt55kKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KfB0DOm7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z3Y3iCXvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eFP5KV9PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 38rwDAfkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 16awIpClWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TskaX58MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ICdjipwAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jjHwAjMaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gLKxiYWiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZJ4q4auyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nlvg29dtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KIorQM01Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 55z3XH91Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 78TsUcsFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func goaglyZlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PKNSgkWWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BsITzQmVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9DA5V7GsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wBC87sS0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TUCGZvMWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 50wWXWQZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ohD6biwwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QlIP41lmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tTOxRkFuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iAKzX8IzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9saMCV7DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rCxxLkKTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UVutIQJKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kEq3D3o2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b9jLHnSMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aIJF40ZwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pzn3MwF8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j78exTZsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FDy2D0jjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UTvMwoWHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NPZLdtcrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dhjC7YQZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t4ZUEA0VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2yKTDSr1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Okx63EOUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WNWd1w6QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5ngarYSWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2BnUZvNUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DdmPbe1mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EvZGfcMBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pOuUdxBjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func slhppc3CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6zY4lHmvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zuWhZD3wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TxZQthwbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f8b2rpujWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func avJ10qK9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mKevyO9KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HdrhHDzMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WpnUTHzSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tBP8pU8ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0UtsMx8ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PG21iKEhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7R18hQPmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DoMpNkd3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tyHDLuvmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qh76MXxoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZkQTf63UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vcrA5teaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yQw85QXuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VoCX1nT2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wIL1F965Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T9tibYxVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OSo8PkRfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W7LeGrc1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FuJOMcSGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0bDbrK9YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ifdREr2RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func clDUXyQSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z7QQXsIiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QVzk1oPyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 93R9kb60Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gLLGUmfSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dXMc6vKjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wL8s0upyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lBD0TGllWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FHiIoij3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QxPxvt5hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cOmMi5JJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y3TovIiTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Fz1ljPtjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eTLSVETpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pwngAfLPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WBmRqTaeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gwMGfZCGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O0FslhoOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2OtPjzvNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wi7XcikSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aeR6ucaKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e7LDK7IKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9VhmmReWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PF9CGQacWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func loXWOG5LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SIyAJkRvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IHJhSBgfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DGLMtBy0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wuRpBLGdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GXpWT0bSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1ZKio0HMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xkRKICCrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DNh7fbolWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jicng6WJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YQxyCrUWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P80jxEfiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G61AFJjhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7G1pstM1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6rG7v3yLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YlUAqHjWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6VCR3NO4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YH1g0CIYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eZZ3owZPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9ibPrl2QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ObiIl06rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LRrIXjr6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FlqiW6eWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fqk3SCMdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7rUaiApYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6q8JuwIbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hzPlDQW0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bp5WwDOhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SYJKVZunWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AIsX5UmlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9FQNCJLLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lXJhhe1pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0hFWjin9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u9mYg85CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f8NKrPXNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D3TuQeNnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aU28ZWeqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PY6EEDqYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I6AB5YSlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BNHcHO2XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WRlyFxU2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OeTe4b9kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 46u76e97Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func csqXSXD8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vX8kJV8AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QDQUjUWfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PRQu7D5rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KD1kUK7nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lfF8T0fIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aQ0ACVzHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0NBME3ekWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KOPkxvq8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DvJPQ4QeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IArb7nQ6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func blZO9cRIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JRobMJvkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BO9V6P6eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E7XUn3THWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fgsMjMkyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KeocrFjOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X08b8pl1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y2DaS2DlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7gwwB60HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0KRwoOEXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vuBRWMeBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mZKejXsCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vpPgfwCrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FYAxL7ogWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2orx4zt3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func azbrJjnSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TOTqhVamWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mc6P9kYHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tSsy6Gz1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qfKHrt8jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TscM4HNqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qrOGjsrwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Rw1uEaZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gG7FxvmwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J2fPj1lnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OT0Mqg6pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ubSvKDVkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XQ1Pr27tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GIYHw0NNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c4WqKqfSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ye4QVIOwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jUBlEMrbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T0YXYlaIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M2p9YGTdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gmsKa0iZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jutd8HkrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i7xx3lWtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 81eUaY0sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6yFT5DBUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3QOfJ1UmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tgv7fJj9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TwvwdZivWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7MaJFOlaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hVFYbiFmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rHJtJUjrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GR9NRcFnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VhtAWfynWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WpKvZjbwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mFDq0uUKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mq7rjrxAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F0khswgMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R46Qhe3CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func naSY7apeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B2T2g4lWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sRuiujEfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0eof2459Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pktSpGueWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UDkeSek2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OFp7DXXMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aCAi3S8IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t1JeDCJEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I3wLfg6YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HXEroMyhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AUmyckBjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oOneROYWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gKVFY8GCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cJG6Ekc4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ps9jifc0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q0WJkoGdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LiEVxRxmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B9f7aLnGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aqU6MrA1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DXIYT2CHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wry7wn4PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lG17BFSaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iZpHDZcMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eKcF1eiFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eyPXrrAUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mz1KoAZ0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6E1oOoznWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PiODKkamWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5eLyCOobWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iLt2ZnisWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xRQ6QEH4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 42biiy6wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MTlrI4b5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eIsFjSURWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q5OQwer1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jCSmXSYzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1xo8xachWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vCLmJ1gHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IUHSohshWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hzWk72DdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rZwMoMkjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 10pR21VKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lrAsffTrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yFws8oJEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bxagOvc7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BtDq0Ji9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KLH944AbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hPdtNBZ6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 98doZTvvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sqruJHgJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lmskhqxOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b4WLlwD5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cKoaBqAWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NlVTE5xYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PL3IlU48Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RwWJWq7tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 20up7aXiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func acr0DN5UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TRtBoJEvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4ziZQWqeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DZ8lQvWjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wsTrhvsgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HKabOmKwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OcOymqXGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C2FM1n2rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YvtuIHygWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vOxgAYVlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BXecJYyyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fxJyB7xrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U5yCWpQkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kewkrIXUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lkigHJ7HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bt3bj67lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UOteEaWvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9fqj524dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TBTj1yl6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hYu9GVVmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KWQY0DGdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QlsVROluWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kSBUW37dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CCjA3T84Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ygrU8XXHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4jIJu8BYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r311YfUyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1vCcCymLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g4w043mwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func svhOWCxwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func acNvKit9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S585l47JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func faa1PQEVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kv791NzrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5qyPXdarWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jPs5YCSSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 59IYP4qwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tfOYpknWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yxTf7If0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1OV7LfGQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JA4tH559Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iPm497ZGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aD5kJbI0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EFlNnuTTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sQr2yTjzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Liabc90JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bgTq6r0eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q5ZIMsebWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TBumh8JbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hYrIBP7KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dxmExDRFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2Ibz2FigWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QAk6NI7DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func INEZOT95Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h1v9KXqBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TBQVMIm9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OytNrqabWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ln6DBDEhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dJqioqpYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PFOhd6yEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WCDrP7LuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QrdbAnE5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v96ous8mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 35iMOIhrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A7lCT5rnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G58xxSdxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gERvDRz3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9vjMF8jdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9xpKkpUsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4FKBMZXuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z6ZinQxuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xqvwsNegWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jLWCMsdfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HuRgUIYaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AL3HQ3wbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bIaFW9Y0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JWD4hJdtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R5EckVeZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qCAJJwZBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EmRtavLhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3eki95m9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0xKS2cNFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xwSSak10Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7hKpNrWQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A1X6PEDCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IThKMuj6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PTyGnnJEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IUqKGqNrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G5F0Oc6NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9QuU3lqqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WpCqUHgdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L7m83RkMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qDgj7ZRiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SORKIFHWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func klYBoJfcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XcNMtHqWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bbkOSVoNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6pcZbYkyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KQfwi7LbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BydcxqcfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FXTtG7QKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2qGHjdkcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HCvwLv21Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IGvmqklVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uzfgXa6UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jxMEOQgsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WUjJHgf9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OMjNd1uPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Hvw9qScQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 38s0Og2lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f7YiezpIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oqjlsIfiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func miWKlXsRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LgtvDaK5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yk9kZg6zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OudDLZnAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 97fD24ENWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i8OwQxzkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a44USk3fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uheEaQpAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PlLVE5XYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WPLfCt2zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4JtKFoMwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VTFQF1FGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5tUoMy54Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rg7eGjo0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UYQ87dA6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X45lw1HmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3KIN18v7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TuPrg0PpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bVAwVNavWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zNc96AFxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4L9qQhMNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HVHLBddcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FTGo9Ce7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9IzFlwz8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sSEVuM0KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 38Yzzk0GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func et65O4JDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IuvdNnH0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tcgYR7lnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uSlFjtteWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rYkv9u6uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CN3PjsiXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iA6MEg7NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IomcqZkMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8iKvF3PEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GwhJkrFkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nUQvHYohWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bMtAd6BrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vdy1QNSWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FYez963OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rl0cgiEFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GraNweHjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QtDl1fwCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bfjrCpa7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dtHG1zp4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qc5wYGABWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IXZtDWEqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dA8bPOm3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fRxViN2TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mtOrTG92Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GMles201Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bNlWd9GkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q6tYiqybWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AdaVtZ9GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d0oJGuM7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func br1xz4nXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5mhd6YjLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vGsFlbyHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s5KnSTH3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GvLfBnGGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oSemxH4jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BKf5QJK3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gpIgch0qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5btf7C2RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QwOnOHggWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dUn7JuZXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kyROLGWPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bQ2rJR3tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eW0wNDtCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 72r8KX3BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nDbytyKAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UrWNnRumWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sEFfTHRXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XucpN5l3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cxIgNRPfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AROVllAUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func anoQS1msWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NuPOivSEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yUL66tDrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nMq71etAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0OsJTU6YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tyVFqODBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RBzfFfdwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F6ETLv1EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aLTehQ7aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HdQOzeZ1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rg3OXKmYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d1TR5mnOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wA56LmptWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func duFd3KRFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MTfIQGupWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HHZsll1jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zXY3R7BjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bZo4fmdJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1z6dPuhRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YU6SkTZZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J0Iq2o7VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vPU3eFUEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tUYFvYpcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YDTX7bRpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j6MfSPSCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3fWaeWhDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QvE0YzvnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cmXpSdV4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9RluoHN6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QcI4DgI5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aKJaTPUBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X5kzaHmBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZcKm5zPQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BLECdiYkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ygHsumNqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y1ZG4y2sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wpRtgQktWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P0JWYpqWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DcoV3NbNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k5mTyPlkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func swxJZQx0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b423KIxRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7exHHIYkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Cx6GLLCXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CvpWz0gYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K3P5z2ljWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4CBmSjaIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2yXyjFTDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s6aUrFPEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t2b6C7CQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ktrA7PQAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tGYqNbj9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QmvfAv8DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eIcuWSBbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jyG12r6VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0jhykx2lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R43PCFU0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1nj1VmppWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x8b55JHBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 01cUUefyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qZqC0JxMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OUeQx8EbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8PjAZHugWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QRHEZkHTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E4zs2wDQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fBMaWjPoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZIlcGnR2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m2SjwzvmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FKzIxAjLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SHDZpwleWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GilnrJspWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IlJfgZu2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MKPXE2HgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fb78kiLgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nnW3Ny7VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FIJT9aMcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aIX0xBGcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qu3O2JrFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JJld8tvrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zg8YILbOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VGyJiwMXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gQCSQSrRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EhI9dWSyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J0gqIPXWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nG5jqJDPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V5O68RXTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0uVMTA2XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QrN20kkHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r9GAyJUiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uMCdgREdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pZtAnBuEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I6KBr4XfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DKse15hGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oIWUuYRqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qIhB6rpbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bHZiidS2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yzc7pM9hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1wXB6z5bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4URORtGwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KehJMoSPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c78CbvKqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p9qMVi49Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kl6bd0fHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eWDtzESAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NcIpMOlGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pKTZsy5HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2HnALjzoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Molu5jccWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PMWBkTc1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0RetVhHdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tmm9veDkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W4HBxoaeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F7K9DBxLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wk6JrlKNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NugJGaYGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gWa0jNdTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VEEzY3x8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7nscoq4XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XMZCzA1oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5SB2ByRzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9BJY0iXfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pRelX2VVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IpU6j52ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zqNcO5dQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JWLeGQeAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B9vILLIDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 38k6AD92Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R2gcYs01Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XOvqyCNzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HQonxiWeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U1TUbSDTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WWMl5BnMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zDz01sTJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MLXmrwueWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jbRK6ul2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KGhcyK2JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AGdSMh3DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rfnzhFnJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sPVOpdAvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gXwn9yAdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zw8GM8BRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vW2OWXN2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 21E06zxFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JyAWlDyEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QQkSQ9RGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XOUPwpfuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yjch8wBcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TZZhbWtKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fszltFjIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5i9wcVIEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VEDSPJytWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gvc46rCrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l33As8OHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R7pnFSaHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7qfoPq9GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5IS6103EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dy6R0TEOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xOQyvJXGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fCboYdO2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xopgZqJaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OX6nnnihWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CB6NAsX9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HMBqi5vJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6cMMcWsxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aYMKZwKqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XEPPVCPzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RutmXUFxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k6OiJl7pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bBNhQiaMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d4BrGckKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4dnCuZfgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8XhSvhWOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eYxWNukzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7ojNy1l8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yMEXTBDCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uV49VDzQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MAzcwCQXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NCV96VzIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XoD04VmjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yi2rx76vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OZHsZC9nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kSpLMWObWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TGZt2giiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VFhPj9V9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a7xK5urGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zHeCgB2NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rv9id3s3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v2PM53nWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 35adPTNjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rCW8a798Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func umr6hlN1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func msF2RHr9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mBzZft61Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ffOPrxDtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G4NqBamFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xGZMqBgXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ssZqo9RMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wK7CecURWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I9c8PzE8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YDbA65QjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KnGrBTvPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b4CUhIwsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ve6hA5fRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qZXOQPUlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N2CL4CbOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jtUBxJzfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sjGc7NSdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func akzJbTIkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JrKmPxDaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8WlXyDloWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nM95ii2MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6DTSGB5GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cyY1MQXrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MH2mQ9LXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lE6X4KFbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EcKZiCgmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JyI1CWf2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BBRYBKOuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YlXEG3PwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AyrfIAmxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nHE4NChcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wQoxx43wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uxrHrSksWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X3rKOkeMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WBcg7YvXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L9qqHUhuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WQoSyAlUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a120ALwxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CSITpi07Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6G3TxD3tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RKKTCOrBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pny98BEaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fRU2QxVUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CSnOBcqRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lcu6eiTZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YaIY3iRTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tt2XnEYuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oUOsRDJnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tiT0JEfuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5M3mGka3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OSuacPxiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6zf3ccNgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 35v6zqfrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZsofGy5KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lFy3isWDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qBgRbp16Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xuTeIBSiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LTVUMIJXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YXAn3fKZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zwX8gJFHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cPPBovUIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JkMJN9eyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VDSssTZBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X9ra2IIIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X5KSpjJ2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LqmkqVZTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x1Ztd84WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cjjeNvgjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vjycsNXHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g5aWTMihWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func daKvg6e6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pw65rGC2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aAmFX2LJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J2Dn0OlHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0QT6JVrAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B3zic0cZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gG6MS9RhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QfrknyfFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jOx1UK9wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h9V21RumWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OlUl59IEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cdNQgKrlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sl6Vk7qsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func emx6TQq7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TG6QnhmCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IY9z9FysWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rvgd8plIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OcrJ47fGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YLe959k8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mQzKIGOZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dpuhZO7tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NzwWKuCyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gkhQjOc6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vpOrXHZTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tr4bDhx3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1huMj6mhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5wDS32gzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SX78QOg3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HgUuAyvgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m2JrZwBzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lXs3DBCJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func indTsaz6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SzprInKgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qk2WbGcpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CdozlziEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3JjaTKZHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q20pgWbIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vGCpmsKCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3jpb5B9lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sm3kkISpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kw5m39JyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2oLB0l2ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VRs3Er19Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hxDtw5XiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ggpMAUE4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f1L0XFUZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LHsRxTTMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bwTQ9FlxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H4C693b6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HYE8RwzVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 52pTzdmEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YyEeqpeGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XJJ1PFOYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xDDtQrORWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1rj8efzSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JeSvhcHBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cs8MsLqPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qr5t82TyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NtP3YfgbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bqqks0GoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KaONAcUOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XUH2jhjhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 75bTvU5zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UicDzqANWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EmU8gBiSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 85BoghzhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7EnuS2qwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kdMjkiFtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hDwQCtd4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oDcEKKkAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ObLOexBdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T4GelhnAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RrJmNJv9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TtKz2Y1EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fjOo87kyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XThxp9gIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NP6JHKQiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AXQOgSSXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r8txFsAGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eZhBFl7dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lgEFyxYJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oIwejwZZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XYkSjrG2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yVZOa0NyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4QxeixKMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7Ec3cPSAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NnGeChLpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3zEnN4LkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rEvHlHlVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iKXScPwWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wLj5eD9hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9ol9NCR5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7lxfvubHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 79npDMZNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ezPSIpZpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lxyh7iVqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fVwSvAkQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DsDHGRJsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func btdO5YFGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QZeB6G3HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1AQs6raeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3sv7I6WTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8kicWgCgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f5qmv8fMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SSrPcX0eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UN3dBkHPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t63sShm8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UzMUlitKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uGRqnMKQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XLx8e3udWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nrQXZFjZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dERFh5U9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oqQ4kbP8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 41FBQORHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BplWBwfWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6b42wfwaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T0Tgji0yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5jk91Cb9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JcDhUVfnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BgqRnUABWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4bTfPlhoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 990Z54fdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p1NjBm2VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TCyI73FJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0KeOyztaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func liRUpCZlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HwGLoERsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sTAzHcVzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mhGoUr80Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KxMtOOsHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yWPMAsguWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6qlmijAMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1MDqMAhqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ygl75xWqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qm8MeiRyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kdCkqDaMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UQoAjxy9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vystPpb8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cy8qAYE9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wyMC7AyiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hCF9i4u7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bUzXaeWMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l7kLdIuFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wS2I1ypuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func whv2Nb0PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wWSFsincWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A6sYo2pVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 592VVOErWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4zk2htCOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5df2nXMPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MHTxKbqrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C2OSY98KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 94NTSsWVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6l0InWdYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MiGq4pAeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hps7Rt5gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6R9tSpbrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BMbYNBrOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VH3hCkpRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4i9x3gThWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yjN96oLEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func icdR8jpHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func badd7tkKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dgdru5tjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uzP8oPI4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WmT4RJ7XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dLnWcgMbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zlSGz3W6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func znLtZpGyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ItnwXNncWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4eSJluoAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x22ErDISWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N5YEMTKlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gl9l595ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qOylTxXiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cm8NRXjbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ry1XBmflWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jEPD10JIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2HRAVE0BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2TnBtuIDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b0pH8iNoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UCYTT3B1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F5KarXj9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TStE5ejbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OsV0bEHLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 12ky9OAfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q0ZuBdxqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TtbnzwjSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i8Y0SuRtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RIf9u2XAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G50cLgMHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IpEoEwbzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fEr3IhVHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ph2Jb1RQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A7CFADkLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mhSACoBpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aDSZ9QyHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MKGwoArUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 09RpfHX1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SsjLUC5EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BWLgT2u3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rlC2POS4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SN7jQBuPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ohxGs4hOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wBplgEeTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O6ftaaqdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GSyCUOXgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func crtltEECWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c09hsoO6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZKW7L0qiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P6VHJmnAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hFDmy8azWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LT4aaYfWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X8X3VOLHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L1RsceyyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LpsI4QH3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2F92vU5uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UcWc1S3fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JHw9JkRxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gg9Mht1rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ztLktxKSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dLa9pJIEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E8qTwPnZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DTHNTT4mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fRtVffoQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 47cq4IUHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W0JLS3v4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g14sWo0hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qmbezyCZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mMzcj4J9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a1fbTpBeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hfaIsrHOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P9Pn8LtmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HxJrmR5dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Qkw2If6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rfNCqYTHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pVbP6O4XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e2hg1VJeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xrwu3YpqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dZALQpAqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6yI6BVclWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BqbKztDAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func urQB86RUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4DfGacJTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nf3TFU4sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1sHTnFBNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IVDx5m7sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AtMz9LDwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CYKgA5VIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yTZlblGlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CB4XK3aQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qLLYWxRnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MJ8Z2GUbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ikly8Fb1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UJTorhU4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W9hhi6M4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0TflTRxdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Epy4aPHcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4CvAKNKiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gACTitO3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dxZNQLhDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 25nzek1jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PDNuaO7xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jzVZXYNjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WmS8Q707Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P3mYoqECWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WvGW4kFaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wFaeBRF9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w62AFvkLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0wff6S6RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wo9BescbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FF9Fi3LsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PGNneWvyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ylVzf26CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dmi70vMbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2iLCuAZ4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N8ILEHBTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u42tL1mGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RXePBb7xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0RPz2wnHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6lVBivsQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 92T3eU57Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pmv6zUQBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PTTu4fP9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s9hPhXvCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3c2OS8UJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TOOyPgBRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xKFbmPjFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EEpLW6kiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x6djKdlSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I8OLqeKWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pNoQR7RrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LUkTXA2jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nrDtYA8OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1D0IWwWSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jViqE9WeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P7Lm2GEHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pQrz07XwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5ClTTEzgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zHjb3JwmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fpNih1xQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tdij48Y0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1rT3nZYbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ORVPxH9vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pdaBmevVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eZFQWi64Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S5djtV8XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D7JsL418Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jyYstdxsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M5CDFOakWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0yK0Afe9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u6dZkZ5sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YUM44lz6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nv20kQjQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 50rlR6wyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WXMzPscbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8GFjneT1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HlN5aUNSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 03MDwVXgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func miBLpeUkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XfLz1K9dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ud1ZkCaqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BegN24LwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v96hBO4vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LDpWDSNoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kvYN3vPoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Be7Ygz9FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YBZaVfyMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RxXxElN7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZCu5SbUoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9j0M02JeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q9f7e4edWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZNVBcEuCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8IfaK7SqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L3bsEjE9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pKD9tE6wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sVNfUmFbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e7wAhjkWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wJYze67JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M5ZEetABWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fxaiDTejWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JihhuZd0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pFPe3NEDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lnGxZCjVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mQRmHU4LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CfpazKleWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oHjHCdJ8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FVDCkXKvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vj8w22RJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o7tXcxGtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ffe6Z0DTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6fmWCTHIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xvQzoU9CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3Pa27hADWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wq29nI6JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GrKgMtGOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f2lUCHCIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ey9LmDqpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XV96zXPVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lmxkn9PNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yCx8Sex6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6W1ge9ezWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X0Zv2UopWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IUpQgzldWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zK1ajufoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TIjM71ARWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q59uEO36Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CpPq4e4CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func etJ5KUbUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6EgGYKU1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func frJa5OqGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yuB2lzZhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9q4gOCxeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qob4ok2zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GV6I0SG7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ucEUHtVPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qv4oAPKBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PnxLa06zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4rdZ5uUWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jqOGTfc1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 36te3gYJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FmGjALe3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qyiMyX7SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JfJlZgvZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PycyO98eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3XAlW61nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0fBQlvgaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 62WaI5ViWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jcQkq8oUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z5yNyK6HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rHr607izWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pRvXO2WmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xXPo6JQzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OyZux5NaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C3q5BW3NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5eKxIQfPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qW3Ma3WKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zxyrn8RRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JS38qnBZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RnzDC5GSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KYIgfQN3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BFJWC83xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GDdJFAkMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I0wnEPKbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dIQGvnRZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jxwKJKYCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZY4c7UgnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func laRkng8gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aS3VrppbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6sM8mGNnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0MjuchIYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YXCDiWduWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XXLjvDyyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NZ2S7t9XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func drgcZ147Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WswumeJOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s9rxVzwHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o8Z9gDuiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sWLEOewIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zG82qWvNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gNG78XZbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NNXLBDURWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kH8Rrp9dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LmYVdH2mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eYsRF9JSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xMH3Y9wdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k73VPdyuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C4qVhbEnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mWeI5L3tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3mKhtuMdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XhuQGcniWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X3ie3mYmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A2z5EB2HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qyo0mIOxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wqQwzpDQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jGbzYxZbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vpbYI0h9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uIpnAqeaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PA3g7NKFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XF35zjwnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9nr1m7IqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rBWbeW1aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xEe8QiFfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zBcVRoHoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bQQF1cdXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UAyFR0cIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rJwWcjTNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qPb2Q8ITWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MXACxIWqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eiLhVxnCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fKzs1rUKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 23ICyQ7LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xt7mesQ8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KhpEjfYLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SHV0k4tyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aimXLAAPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qHgtAXsWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XWJxoz0DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N4JhEcvgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tcv6NyBqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3kykZOTMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mpOOzyKWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PBCuzvVMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wp2IY7CPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MoKL354zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6jF7a2VgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FT1FBWCaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LFCz8uTbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NDKg8qtwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kc7nz354Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xFs4ypV0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OP2AyGiOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O3pgEh38Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FGZM0DUcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G9ZGMj6kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a2bKtDnZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jmv3y1kGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NwrU0CC9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iQa7JDUFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AhEykzmCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n1tpxoqEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZkckZda9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HQZmDc47Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6aX3Im2fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2395P5qXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 20XttoSEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M8fpYXoMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yRjl6K7nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func icoEkfl2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ztz7980HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z8Uo6DYnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GdL10pmDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4RxdgyGqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r6eO0p4uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D2H560FWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x9TEImhAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dyfBkaKxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dn1CxgyQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zopvehbkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xNYAxKU3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BREIp5JjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LMjczvDGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hQEjKL3RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iGDRrmSqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GPm0hd0iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4HvtdtZTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9M61whBoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GN2rq05VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2g7r2fnBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xTf5fs4dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TDU6hIZ8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JQS1CDqFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f9EbZmwOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s3J8Yd7hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0rXAMqcQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m6kSAbjfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1F2fsKwNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ic0TUacyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y7tSXaeDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R58QH0igWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 872REEM5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hPbAeDhGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TuHZixGuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wHYqTPaXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7lei0m2cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func okocECgwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6JZMitGZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0xohZynUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yZg7nwABWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WFAfFv9TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M8apTmEcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yJJluY2EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 06cjeo1KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4JG0EzMhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RBMTD1ScWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dsk4v2V6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dNrjhKggWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4B2UrxUzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ryxmu1pzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8FNY5U4KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Ql2EsDHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JMBwk18LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k2V6wZzjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5sTQV6pKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cOrx4A9qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vUPBF2ErWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 01c0PW6DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aFU85HWjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NiPaSE5dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fsnz1CiSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DajRmZPVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bUx52HrAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Oyg7K95kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8vsuU0GoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BcsxjBIfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O3Pq2MWAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nslQzJiUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2dkPc7ooWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qBsnaMBOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hrNtjctEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EeF4evbjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S5wZDV2hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zS6Gxl8DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bKk77lvqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kl1wMGDTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TwHugBaJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h7FjctUUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lElRA9UbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aNjcWFkZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VSjtJ5BlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4QSAG4gGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XdKT3azGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3qvO7yovWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 16clZ18hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K6Za8MBLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D5k56Il3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cKme9v2lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8IWrD55TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sFK3wOKlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R3Ah4AUAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 954eL9QiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qsrLdHxiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g4dp38mcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9kJvjprBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CV0XMyZpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KXodURbrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BCZdwAffWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7VV0LaRHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lPfrCuEZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func On9VBto6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bx1zzFakWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X1YCTA8EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XkQwppnRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cGqKhs7RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HWfDoJrVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jjqBPYI1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DoLArPmjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3A158g8FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func byaA1361Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g3nYbxHrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YBvWle0eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZOyPkS2aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s3DkVBaDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iZMgFerLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bDbdfg30Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oly5gW2uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GNwcZD2eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zBCOnnP6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N5WXwRg5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gQk5NDxDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MIsxJjqMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DtDhZIvZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7q4SZt28Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func telEXZVeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E74zzOWPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v6eVgeqXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4OSHKXiMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MNl57agjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G3GOOpD5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dGa74cfsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ly77tiMKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6be6R1fRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DiszREYrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JnjoFM6UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FWB0KmPsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fwvXMGCzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uQL8RrUEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MFJaIyUrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jGKTWRnGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PDnQ5y7rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qQbdaxqrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QoYVMztDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qXCB4mDfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U6etpXVBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W1LusYRHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a3zqdx3IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4i1pAjJjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U4jzgwghWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KIdTNuMWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GkP9v1rvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5Viiy2GDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3G0XQHCkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oWnnbm7QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jo545SfQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dtw4lJsiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gNU2YXiJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4EcGEoMsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0qLPH9u2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CI9vzz6bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wXkT4iWtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CzCUcOohWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LKQrQdbzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lIreW9oHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sTquM2heWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xnzn2AZKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XXN1tZZmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QQEcCre2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xh0GtDw0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VUrUpYuoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UVrkuDrxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yMjqdoovWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2y7t45dCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XYl1YIV4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Y3iumcrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bpYslQwxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tfnGYN60Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BGpDOAWIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aPY3rE8fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dl0B8AYBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PbtAh6bUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cUvG7bOrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n4T46xzOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lXkPUDdmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PZ5VVCEDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GD8d6A8ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2iNNAA80Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func crQSO1C3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q6Y4KcJSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4HfbRU1IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z62axGMiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4TITT2rJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GxiYwi6uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QQMVQYfDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cA2GZoeBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Df4o3fEkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Uzkvz1fBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tVZPACrzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kBlJvBvaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cm2eYM8qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WM0ETixwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HNOGhvElWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qvGE3oeAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OtIP0EUXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Hag5qC2EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OiwfOl4BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zzgo1MqYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nftbJiylWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fL4WukCgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WLbMPRJlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mVZfZtnnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QaGLPI5iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0wasLiQzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G5IpusOpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R4UyE8AJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hzERTXjGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lDJe5vXUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func csXgi2vTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w2imVk8YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func acswWcwGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V8AFLL7GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MWjObf0FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9Weq0mDRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bOevSk5qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x4NSdbmNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pZaIEW9jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O8y8DpdDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1uYo2nreWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dPFXgplEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W7TFjG3EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func htA7U45LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dwU6XLXgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func khgq17StWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kloxwrz4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x1fSBHn9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G9mYdZErWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n0Dxc8i5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a4AFl20yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mQUxUtG3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1JxArmlaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xfp7CE2AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0TUnd97xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ITHy7JOjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7gR86VnUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hFSpkLnpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Cw6jS5o1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eG6ORn77Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yllFWJjWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QKU8c01zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HUb4TKw7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ri0ghUJrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J66uU1RoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eZNWGAQEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MOyOvnOOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MQna5jkYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WYgEHHTlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZGg056grWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fx39EAv3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e4hlxLpHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QBM4ahpjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eC3hAiVdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WOd0mnviWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u5aWZbwXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H1wD9ZDMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3UXiWQrtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3tXytAa2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sc4FZVgWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DEm1pYYdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZEAbqIWOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LR6i73bLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tnkYplmQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4OJuyml3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LSNjYupZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uLkpk12LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H6NHMErXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vYKEIfAAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fbXwjeKjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 74ZTNfjHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rGtqAQPmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ftbl6uYuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FFYFPNjmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tEfY1Q7UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CinuQsPvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3xqrdz5dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MYulC6xAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fvvzR6h9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jDA4AbrEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xWbkCpfgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CDQR93vhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a1sOa43CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e6xKILXOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PdfUhBiOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UUEFHzzZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mOYf7qYgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FRAUtFMZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j3IuTKKJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 42jW2SwuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zHkMVewiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4HeiqKs7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v2oHCrWdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f7wbXEn1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PwVrozMNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nLwFR8kXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i8k92kQqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YL9N6HMvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AyGpjgtJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rsBzh2KKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C4WTmFCqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NHRWGsXjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OjJvt3XiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9JwP1EEHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S6LGwk6yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7Tnk6vjuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6IyIMO91Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sNHRz3CZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kAT3rm43Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RY2lLLJnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gGH1cC5QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W0DdbYEBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AhtSZkAqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PbfyleK0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2ANNnNq4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 35HDzCXHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RFFYykd0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WLVZQmkZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R5jlVOGpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U97e0gnyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D9vCvs8hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DfZ5MC5EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k4iUe70iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mQJPc9AWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HSOsFQeUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 50jZsks1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1g0C3UosWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BmqO9uQBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rq5G2aqYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8YQeInrNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gNikBHyIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OamIzXhuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pwHbnrUjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BTjKPQnyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hjO4nl6AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zekj6OnEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y7izR4vwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8eBAcDi3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OazgrnuiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cry7MseRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mOXA4ZTeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pxEraKhcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SyrdFf8yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0rksJffuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TK8X72xUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Oq30kT0JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y8vnYWKWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9QlypTQBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WYlk4FXcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FKn6KuLoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BMCgtVgfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ReuVzl6aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R3iaMN0jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CML2XjhuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xloutDFvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DhB12r65Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YcBFtBA4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wCiiAMRfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EaEgmfX9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sVDbTXkUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ol2JJRmwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qutVty1zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NubxMO1jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PvZnww3yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5hJXKqIOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KA1XScM6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yLgOJUi9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FE8tmFc2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1uytbLahWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WCQtEPhLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sCaMmDCSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BATqtOLKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 54vEHPWOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nRKj5ISJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NqGkOkDwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PBgrP7AJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S6fDaHCbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ELBpWzFAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o23clrmbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hK13dt9FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FUyR08jNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C6liQ5DgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vXMfSe9aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tSHwcSVTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nulW4XKCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CIjfV0NYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KcKGSozFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dturQXCVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func egFlgiDpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q2Im6Yu5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rrqxYuerWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 24Dkb7lYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QLUIZZVoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gaQW6yNYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q1GWQWidWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4IWDpzF2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PUcHmB0XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w51cWi83Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m1xGF7pnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E8fJMkNgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dcaB1h8lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nqw8jaLpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f9gre5XjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SfYNe7s8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2KOanaRRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BscCQWApWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7oJFwKi0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jcT1MJXnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func igb6PbUqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func npSgv3OzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lH6LFwjIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Br1ajR5RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GFX3oWpkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6YsFTz6SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nRbDvf4pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kdc7NqKYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QBl005MyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wemSysU7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y6wAI3C1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ANdHDxTEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qprHO9xpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tV5GD18xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W8oKNcpVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PiEJJQvrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qM2nMLG5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QHgxgEy5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gas49yGnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FV1tSrMfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xLChx3C2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DtyitHQTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PzELJ2eNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func exlcjdyMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pi2gix1rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5AQIpGN4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Uu6ckNOIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KsQ5SUcvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3QKNbcsUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K8b0cOQmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qEAPrZgpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tIdmM5W8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func spxrIo5yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kMhLysAJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wHARufgvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W6bSOW9lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CEZaiF85Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y01NbGQmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fKjUkhTmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CYfM6NDAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AhnUUjp7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IhsPDAdSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wMp7qvrRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yu3VDy3EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func avlFgsphWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VVMpNE5gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YMZnkLDfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kvl2hkIxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7IlUQC0PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Km69b7FaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rmtHyw2bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kmS6MfGyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i9cRqF7WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hlwVlI3aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KzY7ofB0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cGsEBwLwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FbK8UvAZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LYBbAyEjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2dVOqQ3zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aAzHyn1JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tdNIhAoBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f8mCwle5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BMVn6If7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1SulAEtMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fN72OouCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5kJgKHWCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PfdBNWY0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lpy9EL2BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HFwnaI4aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j6bK86kRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IxzgE6HXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VYaWW0gZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lZHj8mtAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cANzeBysWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aK82z9PrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AFM4bdTNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uYTRiyqlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CW8TG2eEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P1HACF0JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JrU7WO5hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mfRgSrmZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func flf1KcyWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EY8eVy2DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dPMsKFuJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WbMRhww3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bTpwsignWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RRAuSBxkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OffD9ndQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qZXT8w0HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S1AUhj3TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wA9rvWmbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kqCpLSR8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1FiZMf4SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RePParBLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vUsoXqKTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sD9AUjhNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PDIxGN6tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZoLzHUkEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PlcXxYUtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4EMZM5cgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vzJ4qODoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func krbVij8KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZBEIAeX7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BofsA7S0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CcMS3lzuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tBrr8huiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S8nkrddlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rAeJahlCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QIxpNCOWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FaYiy1cpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UF6zCy0yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XY1DHmmmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EQ2vBPajWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WAYkOltzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XnWPH16FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LeirPdlfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KBJsMhBhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TKx9VZ2SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LKwVJcHIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DuI5jsmjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pq5O5vH8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tp8lyDZAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z6418A2PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y1jxtK6PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qw5FkYOaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XbwWacUOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gkVOqktRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5A1mkzROWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jUMuOmqfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4YvBxNH6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UVvpNiujWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dkREIjpJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LPfN0DnDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LkmyIa1pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2pn1CClAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mlI8ElUlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7Ie4ohP2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x2SoMJQtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nR9I3g7QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UnIfhDLxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uHlXPyZmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uFUKZXG5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5e249fNuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ReErli4OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YH3Pk6tOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SYDO6H5yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1NSMr3ZXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hKqPlMbZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YlFQ4lPCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jO4BrYUZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yX5CNKcoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7LDOwr8ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hI9bTdPQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eTGSm0MlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VpdEWO7fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func coShwHwCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zZoKei70Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aNmKRXsUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LEfuwP96Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 90iuN5VeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BbbvALxuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QmPb22TYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zGVdq9AwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func POqRCMWsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O1RII96rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0e7Lg17TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4smaofhaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OBw4plS6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7iB5xH9PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kz64Nv1kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zJSNkiWRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8OS0IrlNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PoJbex3sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hDkSCKTyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0zRrdP5wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RRYSIiPZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R61rrczDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dsGCo4kMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FT77bIWRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1WY32bJzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KFpCwMgpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RrYi2WtVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SipdRwWpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CUa9cbf0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wv2ZtHCPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fkNgYLGhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PRlBqMcuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func stJIeooaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IDpoiexCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zsklxVVnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cvW0wKyOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uO0wzZIwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EwxbX1n0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4df7U8bQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7hSfhKPvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S0GaCF8oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rqA8YlEJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lfA8hPQ2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HQcKN4C9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q8G4NFioWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dC0P242kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QucWZg3yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w2jKZExgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vfL57uWzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mZUf4yajWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2PXxV2uzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FWoPGkSjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qhYBH8NVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0RW4M0rcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sg2BoQTBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k10DBJroWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AJA0o4YtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YUUgdsLDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9outnP3yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WTwfipCKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uXhVfgziWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eCiD9EokWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tWGBuaB4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SEMdf0O8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w5EN4v3jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yt7SLXsjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wg4M0tPvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OLVciXGzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vhBWrWKbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nRd21yGkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vKODgMBgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CHI69n8oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vWqwtRAHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5YJUqpZwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SPzEKn1aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func epROIimkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cnSdvVm5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0McPsWFMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9re3NM7TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TDCMBzYuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func azgu8vnFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pHrpB3v0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IePDkfRoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZgErFF7nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vKbctBefWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func usxnueayWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H9kCWej8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rSBlLj2dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lANrhf3NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V8gDDchxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u4MD3AvxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wwM8fNKsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YABxjBUhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GJrHT6D4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func woejjAl6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y7I8r0BoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tcg8tCRpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QfUvrCRiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HHD7bzZxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3SBaV1QbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1AhqiWUXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T5e6qSOHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mfjlMtKbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UqbxJ0z8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Fd09tEf5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nS1tCLwoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9CfT9EL5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rdQ9vgpPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aufmEjE1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ni2rfCoYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fJyvZG0XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g5DuX6SbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sTDZ3kVyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PFeP69ASWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FAsxlwGBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G7mQErjqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T3AkEJlrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HDcx9ticWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0a0RCO1LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PLSj2JhXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VzlJCGBaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EThxL7ysWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kXj7JlRfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pdtyK9CnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vvvEfzsyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dB9qedB4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LL9i95PrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JNU10odzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7oE35iMnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xgLoouaRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fapFGIEwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4PIxmlDQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wBKqpBZZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ql8MPRSNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tthXyXDyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qu3XkYSsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j7TIKTWkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cLYpxOFgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vCZk6Q1hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4cUo48McWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9YKFwSntWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LCgRQ2svWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dbNTQ6g9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ysdQr9HMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0zDeN5upWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xjeDURdyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IwgmDKa8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RKAuVWM1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H03YbL0vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r0dTmxysWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xcjCnmy4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NXDooH3YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UbfTI9LsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8WSqV49iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rD83lNZlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WHbN6AcBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u4gM5Fg4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i2i61zNOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eBbhxa4pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bni0ZiWgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7e2yI8bhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func umxEhvcFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wrQAREn1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func op9BCsUBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QKx4syCYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Abe2qjvVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IXGMXd80Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4hmx33X1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MMBrvFluWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func onKXWrskWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B4jmXheKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cEms3hUWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PpeF4vMwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OPdxH3ntWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eZ8b6ePjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rbqeCBdiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DXMwmP1GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G0pVoPeKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AQq2fZzTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lFW6aj4pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vaMUPXeiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7piwdS2QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JfipqIqJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zbII5hTtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HUxlRZT3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1zkOva9sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PJlVyX4eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6CheugfaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 22yzv43NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wWM1i2qBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ip79yNYIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LputSnJKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lu0Bm69xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ScojBqQPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bjR3RLIBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ACna8eErWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HtH6lNGcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Okoqyz6TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W1l7QENHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aVVu4GhWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i4ZcjDYLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hVuesOHnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZAxjou72Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w421agalWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GxwtFhgxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xrs7AqsVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dABb1yrmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OLPK9HR3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LOjiyAlzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CUv7ewvqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r5BGhMJcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VGoKHOOkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WKZBHU3qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UkjqHlNeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EkE8t6JQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MJIio4FdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V82vpqidWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func byQB6QfBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Iamt1LLBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NvU4aYyvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cpB4MJggWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K6UMw68AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9lWSOATbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0cf1abAjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HclggPKwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0Wdokn7GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A8iUuofSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uURPMFmIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QJBfdC30Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ezed6qNoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PoRA8enIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OuiFTXDIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZSb3ylB0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9bG4SatOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8717gyOhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IUe1wp2mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0hWARg4pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5bRKxewaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H2h69XWvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hXlAnT5PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 513DzGprWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XxkSuPQhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q54UN4DkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func llkXg7zvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PZCs0lQOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pCTo4e4qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nKIhPHB6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 86ctHnyIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LOOhpHjmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aw1H3RtHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PDzGzRZYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gQLvcQMeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Iy7yy5F5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jg2FT7ZKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x9HhWt1sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fBWiJTm7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l7dkFOeWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8YYeM1ypWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tKl9xWPKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ute9kFTtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I1NG9doFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ep6f1olLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nScvpBSQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y0Ke9R4SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dXvLCZhiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L8yzaEgZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func szKYOPwXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iQH5klvyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eTTwsIYZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dRsnkcegWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zrsE6ZB0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lr017LsQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ADjao2coWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AOYxx1zmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GM0j26z6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pbdR29oFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pxHZQMAiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func De490Io7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0J2GiNqnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HMEDuh3QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rCCN1bRCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cKffUXrmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func amOr6WmcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HtDCmFZBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zsQ0yLqgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FWLawmzcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M9qShJ6OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TqosNJTsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gHO3lXj3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QHpW4sdDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fIbAQDCSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D5eLcgcYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nXcYXVQ9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dMJHnYCwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hmWN8rLrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 55cgIlYtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5vc0ap4sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mJhq4zqWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tQNWOWetWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yGbhaTAXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GztMhjfmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9PsgAw8IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fQDIFwnCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qVrUDqm7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PJcmuYXJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G6ouTPISWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LGp8ayZNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CP4TAeNJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8InT97C3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4jSBJsNdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t9ANFKivWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tr9Pbet2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rphvTqTPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j4H4zHhrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vvYJtFGbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5M2Eu094Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DbjAPhcYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func COmbmOnfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O73dgojVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2wfQPg9bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bO9ymAhrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zH7rGDXuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qHDwKF8nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yWlnw8ZwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0f2U8S1pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TxU8fZCfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n55dmaMvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T8WROsqOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Mjq2aTRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VTyvRj1hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KTCaMgM7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cKGuZcHXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rPy8lUStWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6FDp88VLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8LjkvuqHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H3jz8WrsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p1csDHb5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aaC1eKQXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bfFtym7kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZbnCBKnIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3Rx5hapnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5qboePNPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ybmIwgfeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZbpGhgpkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vMTcT983Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p7qPIDVBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f9OGYOzgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1DP9zyZ8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dhjEzrMkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 99feNoW0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VormDpUrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u3vdUy1HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DWlALSqhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KKk1FvdNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CgLxvZIaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iu8JJ57nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eabNZjv1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HAUODuJdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GXRPHq78Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iDSLAQalWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ku24BQtDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ysLoSl6tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gTxy1y4MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MoFN1UxHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LdVSx62rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jhCIVlWTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V7m67RkcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func awnB5ic0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3QoL8QVRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rbKLnYD1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XRgZULHsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sFUhThM7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Ao3eZlRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OptZzhE2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yGoKnSvPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rO719ZJPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FPOUSSzoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X2rQ1kZWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HK4lzE7tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9w5pj8B5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zn8cre13Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LBUsz3JzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SxC0lmbWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Fkr0hnANWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xCVHopqoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DlKQAnJTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6XAUIWUeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5lO3AVCNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zevcg45OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ftFMvpfHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vhDeWx1RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RjONLfPkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XUenraKvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z3n3VYZOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eDp24QYPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KP0MELrzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yg5mx7scWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tGTn1xkCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IwhfSCi6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v4tRgXOqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kUuwcOJMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IRivvg4rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BnPjmf3DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6ym51GcqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lGXZAryhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zqr2OBjVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 68XueVAAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tse1GP8ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KgCRM9kiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nIRN4DWkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7Yvm6OIWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dLaVjLYvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dJTogzNTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V4KVez8KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qe6tLS5TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ze4yDmaBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sz4HkokGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ho25A69BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CMUExL46Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sfk0OXLWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4HGaO0CQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8EUe39gNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CYHnoOAQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fc6sSCySWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EasRtwfXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8cAidboEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 38mM8GgdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KXSWqXKgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rPlJyXuXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SVkNLn2YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s91h6esAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W7n3KRfXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fCzEiRK4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bH55EOmaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xYGIfP5AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4rEz3fcoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 57OteDYKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wJb0deUKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dYpEFmUlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kfC4J19QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K4MER9KTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1dZBwcIiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4FuzIVlWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uRxPEMNkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BILLV5tbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hDXKxebrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func atKShsXFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ynZ2HnRxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VJmTrQrpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wMJVAN7kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mj7DvUqWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u0IzM3HKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VCFouRhWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3OZXRl6mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I0w8rr06Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0Zbh12WFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wZqnWK9sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4RKPcO9BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pPqKHieQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Joiw7EoKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F882CyVKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pXqyIC9LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M5nP3PMWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9RtmZSmdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IeTbqKCLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OEf1ceBDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EfLndB2FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6bxuEWkZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PjRkZew7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X1D5odobWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tGQjwvGhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VXAdY88vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kIW1qKTVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fPsqkiYxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BCFeyAUqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 06Emee3sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RNIkgQbLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kpohA7lnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IzFAhQn5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x8nOe5NhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZiMFXJrsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rd5mxdfoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0ApzEwTMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uDAE04bsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eGeMc2zpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zq8K1jAqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func viqu6PLKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func khjlgH6UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func switwrxjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mc6VAh6JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JM9gWINsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HkHVEuo2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W6vjNHdlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VwaSbhTRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2tRVzUBgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CXQWVnJoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K3awAA2xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aInlZhaOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GOO9gyLsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3t4ssRN4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 98dTyt0pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oPgy4NqLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EIEocOd9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2FiO8fLsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 12b7vfWEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X9Sve9eFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IlQOr9ZcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U09lZWVDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eMj2TNYuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YmvyD2mMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SHvqH9O5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8rApC9NqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n8ZqIC17Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 328casY9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rjuauPqjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func srtDi9o1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qd7myndxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tpeKBeEnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uTCaeQdUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D5GGDRmMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L4LZe4LAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NwpEewR8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JFS2XEjZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wRlZ9XaIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GwtcYDbyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mN9poXAGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9kvh9LHlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func suFsVdLuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KgtBwb3PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 58Fq8aK4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cy2su5EHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gKUkT6VdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G7cLpDnQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tkNSBP0oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bfdxnWpfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4U2PywRDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9oWKcR3BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dCKqXVBwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 01wczZM3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cY89zi7hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O21xHe43Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n1IyqiMiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z9fHEoizWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GkRmyhy7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N81MvsMVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rp0HuD9tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DhXGdp6sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8X31pwpGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SVkAEnRxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NuYU5uQAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gs1zXwrbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YpEpSgGqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RvWNuUDJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 556eWpgHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lQmk1REMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e8hJjvxgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vRJQEuW4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func il7RXeKXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tSfMzC5KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S8LyHh3CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9hlDrFSyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T2Y07VFrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bGIaQObqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nm4l7qxmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xw2dFyk2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B9I9mkF0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uPH0cQNSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gR998PacWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RelFKOQ4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7YoPXom0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CBGKxxpJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pHZr1MZ6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GIwjuJLIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dDSa64G3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A5jLgtAqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2DokgSQZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hkK1aFSWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 35BlSoFUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WQtzfzJpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LMjG8ybPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func acytsWrxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R49nlzKVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ub2IZCTIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sA4wLNnuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GzahHUdeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8sTMIklJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QVdKUP1pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ofRaXx3pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ECmqoSeAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PgYGuG7VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7igzVBuJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YITtHw3qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q0dyLRRbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TsOMV7DuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y8NPKBNkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QJTDhvj0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VWnFJZ16Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cNc02awPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MTq9NgifWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fl8lBW3RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hxGcpM7kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fWjvuSJLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RtF0TjvTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oVrJ0VoVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4qrK1F5cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0IVr1G9MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QLMQNtqpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dbk7BpJcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lwuKeO5DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qKNb9wf2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0UTjUj8DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FnFWkoRYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EhmfkaEfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gmRUHJ3jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ADI0nxnOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gbYKmafHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wrArPConWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6osqUbBuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zPcB373AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 44lH0mb8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ECQmI0vOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8WfKz30KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fCF5aMF2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IzTfr6L9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BtJZfLHTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CsMJpDYZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QLxdP9T3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GaHZ3txnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 23yiOvxeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MCO9l7w2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VszgznhyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QElC5O6hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QoBVv2DiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xfuZRXdPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3ZMd2wSbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dYprNTwLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eag3tNZdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sRzR0yHUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a3opAnByWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gwxfMPtrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func haMZvdWxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o5BbBA9QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LbaZSCEsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KrTXWAzWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RTZZuzCfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Cu4LLwFkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T4MGUd5tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pZ88qUZPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TRyjOlGYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qu0oLiyyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PdL2tyGdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T6wK9CNYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func du93qPiMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SjJRyA4JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g95DVVI7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B1o6LR5mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y8FrqlYLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6F29aY9gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SKYNyvYdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b1diP0BeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sk90TDfpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2DA9tKWgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sSY8JswbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j5ub2eaNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NgIM31yhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qinSjo2zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NRPKIkQuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 87xGwgF0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F854gb7KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JepyDrsgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x4TUv0IcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vY2aCITgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Eqb07A4UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2KKbvyg1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bLkD2eyyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5U8QZLMRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7iXn3S3oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gpa77q70Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZKf0pLCDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ViyQWPPEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ks5mIkyfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uUzA5vlVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1uCzvreUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3i8Sumq1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jU9Si9MtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1AvpP1heWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uoNie8T2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mOoTkdJkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5Nf7sQ84Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2Uhj4SX9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NSWCQeurWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BZmJ56DYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UGUxa7JxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wc72fwBYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8iRtjxKBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aFqOvanaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1AIHYi4GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7hfZzfZsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XgffplmlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XnR3hfKNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZIPbstVvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HTn8MYbdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fTDxKuiSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i91CEWB0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yN4rlgniWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yh8EqWBlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func akadfh01Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WRgd6wqaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hYlBPJIPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cMZUbEbmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l3syYEzYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PNIA8B8XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 26laDDnKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jamHpwOHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SAcJle2jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eoP9UTYlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nPNjWK49Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9bZSQyKMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hx7oSIXMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aegv9SpZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D3P31mC4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4inChARaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YGuAV45nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hwTeMWTfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ja62ko34Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ibKKlGkiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4ucDLc5bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wOhCaz1gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jBPtGjULWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZZLMyydUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HZ6ddB17Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RX2CN36PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wLGGM5uIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IKELczCkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UuRHU2pjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func akIMna5eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func crGdABOKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IaVIYocnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b2nPnMECWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cgWRjUNmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c1eAk8nVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rhfz9jhaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8cdntt1TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jKJ9dfyCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H8Kc4hNVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kw18eEeIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EjpDFMQOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PG7ds8AgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F2Baq6cqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2SzTkF5OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1RR12yBjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jUfHDm76Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EOhxutFGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GZViZFJpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7B4BZgw4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ikTrJqYFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MhexDraTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8U1ZgQj4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func APqf4S83Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hpvkvcoHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5zHQ9AY9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aJOvedGKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eLIaV8SCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z3BcyNhzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KsbrI6obWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LNaOLpUPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iZjRSEJ4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wGOk10D2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9YJ3dM3VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eWPrSgroWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 54DmBwqKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IojLcK1KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6yQHQOg9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KopWOx9BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cIh9YN6EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q7UOwhZhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2efMPiAmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y2SWghaqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 40Iw2ExkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JlIwDykrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func or73EHIUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oFg6ysMXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UO8v46fWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AvNacXKqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GcE8sWUoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4n4xagOTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s2SlltOXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R58S4D0iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 73tNDMFTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HEHgnvNOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

